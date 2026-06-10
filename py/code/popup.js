// ============================================================
//  單一 IIFE 模組 — 所有狀態封裝，不污染全域
// ============================================================
(function () {
  "use strict";

  /* -- 狀態 -- */
  let editor = null;
  let lastCode = "";             // 避免無變動時重複 setValue
  let workspaceListener = null;  // Blockly change listener 參考
  let codeGenMode = null;        // "python" | "javascript"

  let isDragging  = false;
  let isResizing  = false;
  let resizeDir   = "";
  let offsetX = 0, offsetY = 0;
  let startX = 0, startY = 0, startW = 0, startH = 0, startL = 0, startT = 0;

  let lastSelectedRow = null;    // 最後選中的 blocklyTreeRow

  /* -- 資料驅動：Tab 名稱 → YouTube 連結 -- */
  const TAB_HINTS = {
    "opencv影像處理"  : "https://www.youtube.com/watch?v=1ctcuUD7ci8&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=1",
    "mediapip手部偵測": "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=4",
    "鍵鼠外掛"        : "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=5",
    "語音與文字處理"  : "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=6",
    "youtube工具"     : "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=7",
  };

  /* -- 工具函式 -- */

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  /** 取得 Python 程式碼，清除前導 None */
  function getCode() {
    let code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace);
    if (code.startsWith("None\n\n")) code = code.substring(6);
    else if (code.startsWith("None\n")) code = code.substring(5);
    return code;
  }

  function createAndDownloadFile(filename, data) {
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(data);
    a.download = filename;
    a.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: false }));
  }

  /* -- CodeMirror -- */

  function initCodeMirror() {
    if (!editor) {
      editor = CodeMirror.fromTextArea(document.getElementById("pythonEditor"), {
        mode: "python",
        theme: "eclipse",
        lineNumbers: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
      });
    }
  }

  function syncEditor(code) {
    if (!editor || code === lastCode) return;
    lastCode = code;
    editor.setValue(code);
  }

  /* -- Blockly change 事件（取代 setInterval）-- */

  function onWorkspaceChange() {
    try {
      const code = codeGenMode === "python"
        ? getCode()
        : Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace);
      syncEditor(code);
    } catch (e) {
      console.error("Code generation error:", e);
    }
  }

  function attachListener(mode) {
    codeGenMode = mode;
    if (workspaceListener) {
      Blockly.mainWorkspace.removeChangeListener(workspaceListener);
    }
    workspaceListener = Blockly.mainWorkspace.addChangeListener(onWorkspaceChange);
  }

  function detachListener() {
    if (workspaceListener) {
      Blockly.mainWorkspace.removeChangeListener(workspaceListener);
      workspaceListener = null;
    }
  }

  /* -- 彈窗開關 -- */

  function openPopup(mode, title) {
    const popup = document.getElementById("popupWindow");
    document.querySelector(".popup-title").textContent = title;
    popup.style.display = "block";
    initCodeMirror();
    attachListener(mode);
    onWorkspaceChange(); // 立即產出一次
  }

  // 供 inline onclick 呼叫
  window.showPythonCode = function () {
    openPopup("python", "Python Code");
  };

  /* -- 拖曳邊界限制 -- */

  function clampPos(popup, x, y) {
    return {
      x: clamp(x, 0, window.innerWidth  - popup.offsetWidth),
      y: clamp(y, 0, window.innerHeight - popup.offsetHeight),
    };
  }

  /* -- 重置互動狀態（mouseup / blur 共用）-- */

  function resetInteraction() {
    if (isResizing && editor) editor.refresh(); // 縮放結束後刷新一次
    isDragging = isResizing = false;
    resizeDir = "";
  }

  /* -- loadxml：供外部 Blockly 呼叫 -- */

  window.loadxml = function (xml) {
    if (typeof xml !== "string" || xml.length < 5) { alert("No Input"); return false; }
    try {
      const dom = Blockly.Xml.textToDom(xml);
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);
      return true;
    } catch (e) {
      alert("Invalid xml");
      return false;
    }
  };

  /* -- 統一初始化 -- */

  document.addEventListener("DOMContentLoaded", function () {
    const popup          = document.getElementById("popupWindow");
    const popupHeader    = document.getElementById("popupHeader");
    const closeBtn       = document.getElementById("closePopupBtn");
    const openPopupBtn   = document.getElementById("openPopupBtn");
    const copyBtn        = document.getElementById("btn_copy_code");
    const resizeHandles  = document.querySelectorAll(".resize-handle");
    const content_blocks = document.getElementById("content_blocks");
    const e_tab_hint1    = document.getElementById("tab_hint1");
    const topElement     = document.querySelector("body > table");

    /* 複製按鈕 */
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(getCode())
          .then(() => alert("程式碼已複製到剪貼簿！"))
          .catch(err => alert("複製程式碼失敗！" + err));
      });
    }

    /* Save */
    document.getElementById("input_save").addEventListener("click", function () {
      const xmlDom  = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
      const xmlText = Blockly.Xml.domToPrettyText(xmlDom);
      const fileName = prompt("File Name for XML:", "myblocks.xml");
      if (!fileName) return;
      createAndDownloadFile(fileName, new Blob([xmlText], { type: "text/xml" }));
    });

    /* Load */
    document.getElementById("input_load").addEventListener("click", function () {
      const input = document.createElement("input");
      input.type = "file";
      input.onchange = () => {
        const reader = new FileReader();
        reader.onload = () => loadxml(reader.result);
        reader.readAsText(input.files[0]);
      };
      input.click();
    });

    /* 打開彈窗（JavaScript 模式）*/
    openPopupBtn.addEventListener("click", function () {
      openPopup("javascript", "JavaScript 程式碼 (即時更新)");
    });

    /* 關閉彈窗 */
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
      detachListener();
    });

    /* 拖曳 */
    popupHeader.addEventListener("mousedown", function (e) {
      if (e.target === closeBtn || e.target.classList.contains("resize-handle")) return;
      isDragging = true;
      const r = popup.getBoundingClientRect();
      offsetX = e.clientX - r.left;
      offsetY = e.clientY - r.top;
      e.preventDefault();
    });

    /* 縮放手柄 */
    resizeHandles.forEach(handle => {
      handle.addEventListener("mousedown", function (e) {
        isResizing = true;
        resizeDir  = handle.dataset.direction;
        startX = e.clientX; startY = e.clientY;
        const r = popup.getBoundingClientRect();
        startW = r.width; startH = r.height;
        startL = r.left;  startT = r.top;
        e.preventDefault();
        e.stopPropagation();
      });
      handle.addEventListener("click", e => e.stopPropagation());
    });

    /* mousemove：拖曳 + 縮放 */
    const MIN_W = 300, MIN_H = 200;
    document.addEventListener("mousemove", function (e) {
      if (!isDragging && !isResizing) return;

      if (isDragging) {
        const { x, y } = clampPos(popup, e.clientX - offsetX, e.clientY - offsetY);
        popup.style.left = x + "px";
        popup.style.top  = y + "px";
      }

      if (isResizing) {
        const dX = e.clientX - startX, dY = e.clientY - startY;
        let nW = startW, nH = startH, nL = startL, nT = startT;
        switch (resizeDir) {
          case "se": nW+=dX; nH+=dY; break;
          case "sw": nW-=dX; nH+=dY; nL+=dX; break;
          case "ne": nW+=dX; nH-=dY; nT+=dY; break;
          case "nw": nW-=dX; nH-=dY; nL+=dX; nT+=dY; break;
          case "n":  nH-=dY; nT+=dY; break;
          case "s":  nH+=dY; break;
          case "w":  nW-=dX; nL+=dX; break;
          case "e":  nW+=dX; break;
        }
        if (nW >= MIN_W) { popup.style.width = nW+"px"; popup.style.left = nL+"px"; }
        if (nH >= MIN_H) { popup.style.height= nH+"px"; popup.style.top  = nT+"px"; }
        requestAnimationFrame(() => { if (editor) editor.refresh(); });
      }
    });

    /* mouseup / blur：重置狀態 */
    document.addEventListener("mouseup", resetInteraction);
    window.addEventListener("blur", resetInteraction);

    /* Tab 提示（資料驅動）*/
    const hintBase = "<span class=\"hint-text\">（按住 shift 鍵拖曳可維持選單，按住 ctrl 鍵可拖曳單一方塊）</span>";

    if (content_blocks) {
      content_blocks.addEventListener("click", function (e) {
        const row = document.querySelector(".blocklyTreeRow.blocklyTreeSelected");
        if (row) {
          const text = row.textContent.trim();
          let linkHTML = "";
          for (const [kw, url] of Object.entries(TAB_HINTS)) {
            if (text.includes(kw)) {
              linkHTML = "<a href=\"" + url + "\" target=\"_blank\">" + kw + "示範&nbsp;</a>";
              break;
            }
          }
          e_tab_hint1.innerHTML = linkHTML + hintBase;
          e_tab_hint1.style.visibility = "visible";
        } else {
          e_tab_hint1.style.visibility = "hidden";
        }

        if (e.pageX > 200) {
          if (lastSelectedRow !== null && e.shiftKey) lastSelectedRow.click();
        } else {
          lastSelectedRow = row;
        }
      });
    }

    /* 主體點擊（shift 繼續插入）*/
    if (topElement) {
      topElement.addEventListener("click", function () {
        if (lastSelectedRow !== null) {
          lastSelectedRow.click();
          lastSelectedRow = null;
        }
      });
    }

    /* 鍵盤 */
    document.addEventListener("keyup", function (e) {
      if (e.key === "Escape") { lastSelectedRow = null; }
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        lastSelectedRow = document.querySelector(".blocklyTreeRow.blocklyTreeSelected");
      }
    });

  }); // end DOMContentLoaded

})();

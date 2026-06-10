// ── 常數（魔法數字集中管理） ──────────────────────────────
const BLOCKS_WIDTH_NORMAL        = "69%";
const BLOCKS_WIDTH_EXPANDED      = "98%";
const TOOLBAR_CLICK_X_THRESHOLD  = 200; // 工具列寬度約 200px

// ── editor 提升至模組作用域 ───────────────────────────────
let editor = null;

// ── 取得 Blockly 產生的 Python 程式碼 ────────────────────
function getWorkspace() {
  return Blockly.mainWorkspace || (typeof Code !== 'undefined' && Code.workspace) || null;
}

function getCode() {
  const ws = getWorkspace();
  if (!ws) return '';
  let code = Blockly.Python.workspaceToCode(ws);
  if (code.startsWith('None\n\n')) {
    code = code.substring(6);
  } else if (code.startsWith('None\n')) {
    code = code.substring(5);
  }
  return code;
}

// ── Save / Load ──────────────────────────────────────────
function loadxml(xml) {
  if (typeof xml !== "string" || xml.length < 5) {
    alert("No Input");
    return false;
  }
  try {
    const ws = getWorkspace();
    if (!ws) { alert("Workspace not ready"); return false; }
    const dom = Blockly.Xml.textToDom(xml);
    ws.clear();
    Blockly.Xml.domToWorkspace(ws, dom);
    return true;
  } catch (e) {
    alert("Invalid xml");
    return false;
  }
}

function createAndDownloadFile(filename, data) {
  const clickEvent = new MouseEvent('click', {
    view: window, bubbles: true, cancelable: false
  });
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(data);
  a.download = filename;
  a.textContent = 'Download file!';
  a.dispatchEvent(clickEvent);
}

function syncCode() {
  try {
    const code = getCode();
    if (editor) {
      editor.setValue(code);
      editor.refresh();
    }
  } catch (e) {
    console.error('syncCode error:', e);
  }
}

// ── 等到 CodeMirror 與 Blockly workspace 都就緒才初始化 ──
(function () {
  'use strict';

  function init() {
    editor = CodeMirror.fromTextArea(document.getElementById('pythonEditor'), {
      mode: "python",
      theme: "eclipse",
      lineNumbers: true,
      matchBrackets: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false
    });
    editor.refresh();

    const ws = getWorkspace();
    const rightSection   = document.getElementById('rightSection');
    const leftSection    = document.getElementById('leftSection');
    const content_blocks = document.getElementById('content_blocks');
    content_blocks.style.width = BLOCKS_WIDTH_NORMAL;
    if (ws) Blockly.svgResize(ws);

    // Blockly 積木變動 → 同步到右側編輯器
    if (ws) {
      ws.addChangeListener(function () {
        syncCode();
      });
    }

    // 初始產出一次
    syncCode();

    // ── resize ───────────────────────────────────────────
    window.addEventListener('resize', function () {
      content_blocks.style.width = BLOCKS_WIDTH_NORMAL;
      if (ws) Blockly.svgResize(ws);
    });

    // ── toggle 收合 ───────────────────────────────────────
    var toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function () {
      rightSection.classList.toggle('collapsed');
      if (rightSection.classList.contains('collapsed')) {
        content_blocks.style.width = BLOCKS_WIDTH_EXPANDED;
        toggleButton.innerHTML = "&#9668;";
        leftSection.classList.add('expanded');
      } else {
        toggleButton.innerHTML = "&#9658;";
        leftSection.classList.remove('expanded');
        content_blocks.style.width = BLOCKS_WIDTH_NORMAL;
      }
      if (ws) Blockly.svgResize(ws);
      if (editor) editor.refresh();
    });

    // ── keyup ─────────────────────────────────────────────
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') { lastSelected_blocklyTreeRow = null; }
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        lastSelected_blocklyTreeRow =
          document.querySelector('.blocklyTreeRow.blocklyTreeSelected');
      }
    });

    // ── 左側點擊（維持選單） ──────────────────────────────
    var topElement = document.querySelector('body > .left-section');
    if (topElement) {
      topElement.addEventListener('click', function () {
        if (lastSelected_blocklyTreeRow !== null) {
          lastSelected_blocklyTreeRow.click();
          lastSelected_blocklyTreeRow = null;
        }
      });
    } else {
      console.warn('left-section not found');
    }

    // ── content_blocks 點擊（YouTube 提示） ──────────────
    var HINT_LINKS = [
      { tab: "opencv影像處理",   url: "https://www.youtube.com/watch?v=1ctcuUD7ci8&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=1" },
      { tab: "mediapip手部偵測", url: "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=4" },
      { tab: "鍵鼠外掛",         url: "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=5" },
      { tab: "語音與文字處理",   url: "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=6" },
      { tab: "youtube工具",      url: "https://www.youtube.com/watch?v=MnowZOsAVvQ&list=PLPE0QG97eXpji7ijpNc2iGu21Q4Y0xJ3s&index=7" },
    ];
    var HINT_BASE_HTML = '<span class="btn-label">(按住shift鍵拖曳可維持選單,按住ctrl鍵可拖曳單一方塊)</span>';

    if (content_blocks) {
      content_blocks.addEventListener('click', function (e) {
        var blocklyTreeRow = document.querySelector('.blocklyTreeRow.blocklyTreeSelected');
        var e_tab_hint1    = document.getElementById('tab_hint1');

        if (blocklyTreeRow !== null) {
          var matched = null;
          for (var i = 0; i < HINT_LINKS.length; i++) {
            if (blocklyTreeRow.textContent.indexOf(HINT_LINKS[i].tab) !== -1) {
              matched = HINT_LINKS[i];
              break;
            }
          }
          e_tab_hint1.innerHTML = matched
            ? '<a href="' + matched.url + '">' + matched.tab + '示範&nbsp;</a>' + HINT_BASE_HTML
            : HINT_BASE_HTML;
          e_tab_hint1.style.visibility = 'visible';
        } else {
          if (e_tab_hint1) e_tab_hint1.style.visibility = 'hidden';
          if (e.pageX > TOOLBAR_CLICK_X_THRESHOLD) {
            if (lastSelected_blocklyTreeRow !== null && e.shiftKey) {
              lastSelected_blocklyTreeRow.click();
            }
          } else {
            lastSelected_blocklyTreeRow = blocklyTreeRow;
          }
        }
      });
    }
  }

  function tryInit() {
    if (typeof CodeMirror !== 'undefined' && getWorkspace()) {
      init();
    } else {
      setTimeout(tryInit, 100);
    }
  }

  tryInit();
})();

var lastSelected_blocklyTreeRow = null;

document.getElementById('input_load').addEventListener('click', function() {
  var input = document.createElement('input');
  input.type = 'file';
  input.onchange = function () {
    var reader = new FileReader();
    reader.onload = function () { loadxml(reader.result); };
    reader.readAsText(input.files[0]);
  };
  input.click();
});

document.getElementById('input_save').addEventListener('click', function() {
  var ws = getWorkspace();
  if (!ws) { alert('Workspace not ready'); return; }
  var xmlDom  = Blockly.Xml.workspaceToDom(ws);
  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  var fileName = prompt('File Name for XML:', 'myblocks.xml');
  if (!fileName) return;
  var data = new Blob([xmlText], { type: 'text/xml' });
  createAndDownloadFile(fileName, data);
});

document.getElementById('btn_copy_code').addEventListener('click', function() {
  window.navigator.clipboard.writeText(getCode())
    .then(function () { alert('程式碼已複製到剪貼簿！'); })
    .catch(function (err) { alert('複製程式碼失敗！' + err); });
});

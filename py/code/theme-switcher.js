/* ============================================================
    CodeMirror 主題切換器（離線、無外部相依）
   ------------------------------------------------------------
   - 右下角浮動按鈕，點開選擇 6 種深色主題
   - 立即套用，不需重新載入頁面
   - 選擇記在 localStorage，同一台電腦切換頁面會沿用
   - 只有程式碼區變色，積木區維持淺色

   必須載入在 codemirror.min.js 之後、頁面初始化編輯器之前。
   ============================================================ */
(function () {
  'use strict';

  var STORAGE_KEY = 'cm-theme';
  var DEFAULT_ID = 'nord';

  var THEMES = [
    { id: 'nord',                    label: 'Nord',             bg: '#2e3440', border: '#3b4252', dot: '#81a1c1' },
    { id: 'gruvbox-dark',            label: 'Gruvbox Dark',     bg: '#282828', border: '#3c3836', dot: '#fabd2f' },
    { id: 'ayu-mirage',              label: 'Ayu Mirage',       bg: '#1f2430', border: '#2b3040', dot: '#ffa759' },
    { id: 'material-darker',         label: 'Material Darker',  bg: '#212121', border: '#2f2f2f', dot: '#80cbc4' },
    { id: 'monokai',                 label: 'Monokai',          bg: '#272822', border: '#3e3d32', dot: '#f92672' },
    { id: 'tomorrow-night-eighties', label: 'Tomorrow Night 80s', bg: '#000000', border: '#1f1f1f', dot: '#f2777a' }
  ];

  var activeId = DEFAULT_ID;

  function find(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return THEMES[i];
    }
    return null;
  }

  function themeLink() {
    return document.getElementById('cm-theme') ||
           document.querySelector('link[href*="codemirror/theme/"]');
  }

  function themeFromDom() {
    var l = themeLink();
    if (!l) return DEFAULT_ID;
    var m = l.href.match(/theme\/([\w-]+)\.min\.css/);
    return (m && find(m[1])) ? m[1] : DEFAULT_ID;
  }

  /* ---------- 套用主題 ---------- */
  function apply(id, persist) {
    var t = find(id) || find(DEFAULT_ID);
    activeId = t.id;

    var l = themeLink();
    if (l) {
      var m = l.href.match(/theme\/([\w-]+)\.min\.css/);
      if (!m || m[1] !== t.id) {
        l.href = l.href.replace(/theme\/[\w-]+\.min\.css(\?[^#]*)?$/, 'theme/' + t.id + '.min.css?v=1');
      }
    }

    // 頁面原本把 gutter 背景與邊框寫死成 nord 色，這裡跟著主題覆蓋
    var st = document.getElementById('cm-theme-override');
    if (!st) {
      st = document.createElement('style');
      st.id = 'cm-theme-override';
      (document.head || document.documentElement).appendChild(st);
    }
    st.textContent =
      '.CodeMirror-gutters{background-color:' + t.bg + ' !important;}' +
      '.CodeMirror{border-color:' + t.border + ' !important;}';

    var els = document.querySelectorAll('.CodeMirror');
    for (var i = 0; i < els.length; i++) {
      var cm = els[i].CodeMirror;
      if (cm && cm.setOption) {
        try { cm.setOption('theme', t.id); } catch (e) {}
      }
    }

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, t.id); } catch (e) {}
    }
    render();
  }

  /* ---------- 讓之後才建立的編輯器也用目前主題 ---------- */
  function patchCodeMirror() {
    if (!window.CodeMirror || !CodeMirror.fromTextArea || CodeMirror.__cmThemePatched) return;
    var orig = CodeMirror.fromTextArea;
    CodeMirror.fromTextArea = function (textarea, options) {
      // 直接改寫傳入的選項，避免先畫成頁面預設主題再換色造成的閃爍
      var opts = options || {};
      opts.theme = activeId;
      return orig.call(this, textarea, opts);
    };
    CodeMirror.__cmThemePatched = true;
  }

  /* ---------- UI ---------- */
  function buildUI() {
    if (document.getElementById('cm-theme-switcher')) return;

    var style = document.createElement('style');
    style.id = 'cm-theme-switcher-style';
    style.textContent = [
      '#cm-theme-switcher{position:fixed;left:16px;bottom:34px;z-index:2147483000;',
      'font:12px/1.45 "Segoe UI","Microsoft JhengHei",sans-serif;color:#24292f;}',
      '#cm-theme-switcher .cm-ts-btn{display:flex;align-items:center;gap:7px;',
      'background:#fff;border:1px solid #d0d7de;border-radius:16px;padding:6px 12px;',
      'box-shadow:0 2px 8px rgba(0,0,0,.16);cursor:pointer;user-select:none;white-space:nowrap;}',
      '#cm-theme-switcher .cm-ts-btn:hover{background:#f6f8fa;}',
      '#cm-theme-switcher .cm-ts-dot{width:10px;height:10px;border-radius:50%;display:inline-block;',
      'box-shadow:inset 0 0 0 1px rgba(0,0,0,.18);}',
      '#cm-theme-switcher .cm-ts-caret{color:#8b949e;font-size:9px;}',
      '#cm-theme-switcher .cm-ts-panel{display:none;position:absolute;left:0;bottom:42px;',
      'background:#fff;border:1px solid #d0d7de;border-radius:8px;padding:6px;',
      'box-shadow:0 6px 20px rgba(0,0,0,.2);min-width:190px;}',
      '#cm-theme-switcher.open .cm-ts-panel{display:block;}',
      '#cm-theme-switcher .cm-ts-item{display:flex;align-items:center;gap:8px;padding:7px 9px;',
      'border-radius:5px;cursor:pointer;white-space:nowrap;}',
      '#cm-theme-switcher .cm-ts-item:hover{background:#f0f3f6;}',
      '#cm-theme-switcher .cm-ts-item.active{background:#e7f0fb;font-weight:600;}',
      '#cm-theme-switcher .cm-ts-hint{padding:7px 9px 2px;margin-top:4px;color:#8b949e;',
      'font-size:10.5px;border-top:1px solid #eaeef2;}'
    ].join('');
    document.head.appendChild(style);

    var root = document.createElement('div');
    root.id = 'cm-theme-switcher';
    root.innerHTML =
      '<div class="cm-ts-panel"></div>' +
      '<div class="cm-ts-btn"><span class="cm-ts-dot"></span>' +
      '<span class="cm-ts-label">主題</span><span class="cm-ts-caret">▲</span></div>';
    document.body.appendChild(root);

    var panel = root.querySelector('.cm-ts-panel');
    for (var i = 0; i < THEMES.length; i++) {
      var t = THEMES[i];
      var item = document.createElement('div');
      item.className = 'cm-ts-item';
      item.setAttribute('data-theme', t.id);
      item.innerHTML = '<span class="cm-ts-dot" style="background:' + t.dot + '"></span>' +
                       '<span>' + t.label + '</span>';
      panel.appendChild(item);
    }
    var hint = document.createElement('div');
    hint.className = 'cm-ts-hint';
    hint.textContent = '只換程式碼區，積木區不變';
    panel.appendChild(hint);

    root.querySelector('.cm-ts-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      root.classList.toggle('open');
    });
    panel.addEventListener('click', function (e) {
      var item = e.target.closest ? e.target.closest('.cm-ts-item') : null;
      if (!item) return;
      apply(item.getAttribute('data-theme'), true);
      root.classList.remove('open');
      e.stopPropagation();
    });
    document.addEventListener('click', function () { root.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') root.classList.remove('open');
    });
  }

  /* ---------- 位置：避開 Blockly 左側工具箱與右下角縮放鈕 ---------- */
  function positionUI() {
    var root = document.getElementById('cm-theme-switcher');
    if (!root) return;
    var left = 16;
    var tb = document.querySelector('.blocklyToolboxDiv');
    if (tb) {
      var r = tb.getBoundingClientRect();
      if (r && r.width > 0 && r.height > 0) left = Math.round(r.right + 12);
    }
    var maxLeft = Math.max(8, window.innerWidth - 220);
    root.style.left = Math.max(8, Math.min(left, maxLeft)) + 'px';
  }

  function render() {
    var root = document.getElementById('cm-theme-switcher');
    if (!root) return;
    var t = find(activeId) || THEMES[0];
    root.querySelector('.cm-ts-dot').style.background = t.dot;
    root.querySelector('.cm-ts-label').textContent = t.label;
    var items = root.querySelectorAll('.cm-ts-item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('active', items[i].getAttribute('data-theme') === t.id);
    }
  }

  /* ---------- 初始化 ---------- */
  function init() {
    patchCodeMirror();
    buildUI();
    positionUI();

    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var initial = (stored && find(stored)) ? stored : themeFromDom();
    apply(initial, false);

    // 編輯器 / 工具箱可能稍後才建立（two-frames、jump 彈窗、多分類工具箱）
    window.addEventListener('load', function () { positionUI(); apply(activeId, false); });
    setTimeout(function () { positionUI(); apply(activeId, false); }, 500);
    setTimeout(positionUI, 1500);
    window.addEventListener('resize', positionUI);
  }

  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);

  window.CMThemeSwitcher = {
    apply: function (id) { apply(id, true); },
    themes: THEMES,
    current: function () { return activeId; }
  };
})();

(function () {
  const root = document.documentElement;

  // ---- Theme ----
  function getStoredTheme() {
    return localStorage.getItem('enclave-theme');
  }

  function applyTheme(mode) {
    if (!mode) {
      // let mkdocs material handle default
      root.removeAttribute('data-md-color-scheme');
      return;
    }
    root.setAttribute('data-md-color-scheme', mode);
    localStorage.setItem('enclave-theme', mode);
  }

  // On load, apply stored theme (if any)
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    applyTheme(storedTheme);
  }

  // ---- Font ----
  function getStoredFont() {
    return localStorage.getItem('enclave-font') || 'satoshi';
  }

  function applyFont(font) {
    root.setAttribute('data-font', font);
    localStorage.setItem('enclave-font', font);
  }

  const storedFont = getStoredFont();
  applyFont(storedFont);

  // ---- UI: create a small settings bar ----
  function createSettingsBar() {
    const bar = document.createElement('div');
    bar.className = 'enclave-settings';
    bar.innerHTML = `
      <div class="enclave-settings-inner">
        <span class="enclave-settings-label">Theme</span>
        <button class="enclave-btn" data-theme="default">Auto</button>
        <button class="enclave-btn" data-theme="default">Light</button>
        <button class="enclave-btn" data-theme="slate">Dark</button>

        <span class="enclave-settings-label" style="margin-left: 12px;">Font</span>
        <button class="enclave-btn" data-font="satoshi">Satoshi</button>
        <button class="enclave-btn" data-font="opendyslexic">OpenDyslexic</button>
      </div>
    `;
    return bar;
  }

  // Insert settings bar at top of main content
  function injectSettingsBar() {
    const main = document.querySelector('main.md-content');
    if (!main) return;
    const bar = createSettingsBar();
    main.parentNode.insertBefore(bar, main);
  }

  injectSettingsBar();

  // ---- Event handlers ----
  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('enclave-btn')) {
      const themeMode = target.getAttribute('data-theme');
      const fontName = target.getAttribute('data-font');

      if (themeMode) {
        // Map "Light" button to default scheme by clearing stored theme
        const label = target.textContent.trim().toLowerCase();
        if (label === 'auto' || label === 'light') {
          // "Auto" / "Light": let MkDocs default (light) handle it
          localStorage.removeItem('enclave-theme');
          root.removeAttribute('data-md-color-scheme');
        } else if (label === 'dark') {
          applyTheme('slate');
        }
      }

      if (fontName) {
        applyFont(fontName);
      }
    }
  });
})();

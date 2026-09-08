(function () {
  "use strict";

  const FONT_STORAGE_KEY = "enclave-font";
  const SIZE_STORAGE_KEY = "enclave-font-size";
  const root = document.documentElement;

  function getFont() {
    return localStorage.getItem(FONT_STORAGE_KEY) || "satoshi";
  }

  function applyFont(font) {
    const selected = font === "opendyslexic" ? "opendyslexic" : "satoshi";
    root.dataset.enclaveFont = selected;
    localStorage.setItem(FONT_STORAGE_KEY, selected);
  }

  function getSize() {
    return localStorage.getItem(SIZE_STORAGE_KEY) || "normal";
  }

  function applySize(size) {
    const validSizes = ["small", "normal", "large", "xlarge"];
    const selected = validSizes.includes(size) ? size : "normal";

    root.dataset.enclaveTextSize = selected;
    localStorage.setItem(SIZE_STORAGE_KEY, selected);
  }

  function createControls() {
    if (document.querySelector(".enclave-accessibility-control")) {
      return;
    }

    const controls = document.createElement("div");
    controls.className = "enclave-accessibility-control";

    const fontLabel = document.createElement("label");
    fontLabel.className = "enclave-font-control";

    const fontText = document.createElement("span");
    fontText.textContent = "Font";

    const fontSelect = document.createElement("select");
    fontSelect.setAttribute("aria-label", "Choose reading font");
    fontSelect.innerHTML = `
      <option value="satoshi">Satoshi</option>
      <option value="opendyslexic">OpenDyslexic</option>
    `;
    fontSelect.value = getFont();

    fontSelect.addEventListener("change", function () {
      applyFont(fontSelect.value);
    });

    fontLabel.append(fontText, fontSelect);

    const sizeLabel = document.createElement("label");
    sizeLabel.className = "enclave-size-control";

    const sizeText = document.createElement("span");
    sizeText.textContent = "Size";

    const sizeSelect = document.createElement("select");
    sizeSelect.setAttribute("aria-label", "Choose text size");
    sizeSelect.innerHTML = `
      <option value="small">Small</option>
      <option value="normal">Normal</option>
      <option value="large">Large</option>
      <option value="xlarge">Extra large</option>
    `;
    sizeSelect.value = getSize();

    sizeSelect.addEventListener("change", function () {
      applySize(sizeSelect.value);
    });

    sizeLabel.append(sizeText, sizeSelect);
    controls.append(fontLabel, sizeLabel);

    const header = document.querySelector(".md-header__inner");
    if (header) {
      header.appendChild(controls);
    }
  }

  function initialize() {
    applyFont(getFont());
    applySize(getSize());
    createControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }

  if (typeof window.document$ !== "undefined") {
    window.document$.subscribe(function () {
      createControls();
    });
  }
})();

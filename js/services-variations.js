/* =========================================================
   Services variations — preview only.
   Powers the tab/panel swap in Variation 3 (Interactive
   Explorer). Click-first so it works the same on touch as
   it does with a mouse; hover is a bonus on devices that
   support it.
   ========================================================= */
(function () {
  "use strict";

  var explorer = document.querySelector("[data-svc-explorer]");
  if (!explorer) return;

  var tabs = explorer.querySelectorAll("[data-svc-tab]");
  var panel = explorer.querySelector("[data-svc-panel]");
  var panelIndex = explorer.querySelector("[data-svc-panel-index]");
  var panelTitle = explorer.querySelector("[data-svc-panel-title]");
  var panelText = explorer.querySelector("[data-svc-panel-text]");
  var hoverCapable = window.matchMedia("(hover: hover)").matches;

  function activate(tab) {
    tabs.forEach(function (t) {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");

    panelIndex.textContent = tab.dataset.svcIndex;
    panelTitle.textContent = tab.dataset.svcTitle;
    panelText.textContent = tab.dataset.svcText;

    panel.classList.remove("is-swapping");
    void panel.offsetWidth; // restart the reveal animation
    panel.classList.add("is-swapping");
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { activate(tab); });
    if (hoverCapable) {
      tab.addEventListener("mouseenter", function () { activate(tab); });
    }
  });
})();

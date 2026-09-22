/* =========================================================
   GBMIC — interactions (vanilla, no animation libraries)
   Nav scrolled state, mobile menu, anchor navigation, scroll
   reveal, and contact-form validation. Reveal is intentionally
   minimal: a one-time fade + rise per element, no parallax.
   ========================================================= */
(function () {
  "use strict";

  var doc = document;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------------------------------------
     NAV: scrolled state + mobile menu
  ------------------------------------------------- */
  var nav = doc.querySelector("[data-nav]");
  var menuToggle = doc.querySelector("[data-menu-toggle]");

  function setScrolled() {
    if (nav) nav.classList.toggle("is-scrolled", window.pageYOffset > 20);
  }
  window.addEventListener("scroll", setScrolled, { passive: true });
  setScrolled();

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -------------------------------------------------
     Scroll reveal: fade + rise [data-reveal] elements into
     view once. CSS (.js [data-reveal]) owns the hidden state
     and the reduced-motion override — this just flips the
     class when an element crosses into the viewport.
  ------------------------------------------------- */
  var revealEls = doc.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-revealed"); });
    }
  }

  /* -------------------------------------------------
     Explorer: interactive list + detail panel (alt layout
     for Services / Business & Entrepreneurship). Click-first
     so it works the same on touch as with a mouse; hover is
     a bonus on devices that support it. Supports multiple
     independent instances on the same page.
  ------------------------------------------------- */
  var hoverCapable = window.matchMedia("(hover: hover)").matches;
  doc.querySelectorAll("[data-explorer]").forEach(function (explorer) {
    var tabs = explorer.querySelectorAll("[data-tab]");
    var panel = explorer.querySelector("[data-panel]");
    var panelIcon = explorer.querySelector("[data-panel-icon]");
    var panelTitle = explorer.querySelector("[data-panel-title]");
    var panelText = explorer.querySelector("[data-panel-text]");

    function activate(tab) {
      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      var iconTemplate = tab.querySelector("[data-tab-icon]");
      if (iconTemplate) {
        panelIcon.innerHTML = "";
        panelIcon.appendChild(iconTemplate.content.cloneNode(true));
      }
      panelTitle.textContent = tab.dataset.tabTitle;
      panelText.textContent = tab.dataset.tabText;

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
  });

  /* -------------------------------------------------
     Accordion: animated <details> disclosure. Native details
     snap open, and a native `name` group closes siblings with
     no transition — so exclusivity is handled here instead,
     letting both the opening and the closing row animate.
  ------------------------------------------------- */
  doc.querySelectorAll("[data-accordion]").forEach(function (acc) {
    var items = [].slice.call(acc.querySelectorAll("details"));

    function panelOf(item) { return item.querySelector(".aboutAcc__panel"); }

    // Animations are interruptible: a click mid-flight reverses from
    // wherever the fold currently is, so fast clicking never desyncs.
    function cancel(item) {
      if (item._accDone) {
        panelOf(item).removeEventListener("transitionend", item._accDone);
        item._accDone = null;
      }
    }

    function setOpen(item, open) {
      var panel = panelOf(item);
      if (!panel) return;
      cancel(item);

      if (reduceMotion) {
        item.open = open;
        item.classList.remove("is-closing");
        panel.style.height = "";
        return;
      }

      // measure where we are now (mid-animation or at rest)
      var from = panel.getBoundingClientRect().height;
      if (!item.open) from = 0;

      // [open] must stay on through a collapse or the browser stops
      // rendering the content; .is-closing fades the copy meanwhile.
      item.open = true;
      item.classList.toggle("is-closing", !open);

      panel.style.height = from + "px";
      void panel.offsetHeight;                       // commit the start value
      var to = open ? panel.scrollHeight : 0;
      panel.style.height = to + "px";

      item._accDone = function (e) {
        if (e.propertyName !== "height" || e.target !== panel) return;
        cancel(item);
        item.open = open;
        item.classList.remove("is-closing");
        panel.style.height = "";                     // release to auto
      };
      panel.addEventListener("transitionend", item._accDone);
    }

    items.forEach(function (item) {
      var summary = item.querySelector("summary");
      if (!summary) return;

      summary.addEventListener("click", function (e) {
        e.preventDefault();
        // .is-closing means it is open-but-collapsing, so treat it as closed
        var isOpen = item.open && !item.classList.contains("is-closing");
        if (isOpen) {
          setOpen(item, false);
        } else {
          items.forEach(function (other) {
            if (other !== item && other.open) setOpen(other, false);
          });
          setOpen(item, true);
        }
      });
    });
  });

  /* -------------------------------------------------
     Biz explorer: a text index that cross-fades a stacked
     photo panel (Our Companies). Images are all in the DOM
     and toggled by opacity, so swapping never flashes.
  ------------------------------------------------- */
  doc.querySelectorAll("[data-biz-explorer]").forEach(function (explorer) {
    var tabs = explorer.querySelectorAll("[data-biz-tab]");
    var imgs = explorer.querySelectorAll("[data-biz-img]");
    var textEl = explorer.querySelector("[data-biz-text]");

    function activate(tab) {
      var i = tab.dataset.index;
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      imgs.forEach(function (img) {
        img.classList.toggle("is-shown", img.dataset.index === i);
      });
      if (textEl) textEl.textContent = tab.dataset.text;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () { activate(tab); });
      tab.addEventListener("focus", function () { activate(tab); });
      if (hoverCapable) {
        tab.addEventListener("mouseenter", function () { activate(tab); });
      }
    });
  });

  /* -------------------------------------------------
     Anchor links: jump to section, clearing the fixed nav
  ------------------------------------------------- */
  doc.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = doc.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  /* -------------------------------------------------
     Contact form: validation + honeypot
  ------------------------------------------------- */
  var form = doc.querySelector(".contact__form");
  if (!form) return;

  var statusEl = form.querySelector("[data-form-status]");
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(field, msg) {
    field.classList.toggle("is-invalid", !!msg);
    var slot = field.querySelector("[data-error]");
    if (slot) slot.textContent = msg || "";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Honeypot — a filled hidden field means a bot.
    if (form.querySelector(".hp") && form.querySelector(".hp").value) {
      if (statusEl) statusEl.textContent = "Thanks — your message has been sent.";
      form.reset();
      return;
    }

    var ok = true;
    var nameField = form.querySelector("#name").closest(".field");
    var emailField = form.querySelector("#email").closest(".field");
    var msgField = form.querySelector("#message").closest(".field");

    if (!form.querySelector("#name").value.trim()) { setError(nameField, "Please enter your name."); ok = false; }
    else setError(nameField, "");

    var emailVal = form.querySelector("#email").value.trim();
    if (!emailVal) { setError(emailField, "Please enter your email."); ok = false; }
    else if (!emailRe.test(emailVal)) { setError(emailField, "That email doesn't look right."); ok = false; }
    else setError(emailField, "");

    if (!form.querySelector("#message").value.trim()) { setError(msgField, "Please add a short message."); ok = false; }
    else setError(msgField, "");

    if (!ok) { if (statusEl) statusEl.textContent = ""; return; }

    // No backend yet — wire this to Formspree/Getform or a serverless
    // endpoint to actually deliver mail to gmic.nepal@gmail.com.
    if (statusEl) statusEl.textContent = "Thanks — your message has been sent. The GBMIC team will be in touch.";
    form.reset();
  });
})();

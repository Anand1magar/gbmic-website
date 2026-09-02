/* =========================================================
   Bhim Gurung — interactions (vanilla, no animation libraries)
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
     Team carousel: horizontal scroll-snap track with
     prev/next arrows, a scroll-progress bar, and
     click-to-open bio panels (one open at a time).
     No-JS fallback: plain scroll row, bios on focus.
  ------------------------------------------------- */
  doc.querySelectorAll("[data-team-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector("[data-team-track]");
    if (!track) return;
    var cards = carousel.querySelectorAll(".team__card");
    var prevBtn = carousel.querySelector("[data-team-prev]");
    var nextBtn = carousel.querySelector("[data-team-next]");
    var progress = carousel.querySelector("[data-team-progress]");
    var controls = carousel.querySelector(".team__controls");

    function maxScroll() { return track.scrollWidth - track.clientWidth; }

    function stepWidth() {
      var card = track.querySelector(".team__card");
      if (!card) return track.clientWidth * 0.8;
      var styles = getComputedStyle(track);
      var gap = parseInt(styles.columnGap || styles.gap, 10) || 20;
      return card.offsetWidth + gap;
    }

    function update() {
      var max = maxScroll();
      if (controls) controls.style.display = max > 4 ? "" : "none";
      if (max <= 4) return;
      var frac = track.clientWidth / track.scrollWidth;
      var w = Math.max(frac * 100, 14);
      var ratio = track.scrollLeft / max;
      if (progress) {
        progress.style.width = w + "%";
        progress.style.left = ratio * (100 - w) + "%";
      }
      if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
      if (nextBtn) nextBtn.disabled = track.scrollLeft >= max - 2;
    }

    function nudge(dir) {
      track.scrollBy({ left: dir * stepWidth(), behavior: reduceMotion ? "auto" : "smooth" });
    }

    function closeAll(except) {
      cards.forEach(function (card) {
        if (card === except) return;
        card.classList.remove("is-open");
        var btn = card.querySelector(".team__toggle");
        var bio = card.querySelector(".team__bio");
        if (btn) btn.setAttribute("aria-expanded", "false");
        if (bio) bio.setAttribute("aria-hidden", "true");
      });
    }

    cards.forEach(function (card) {
      var btn = card.querySelector(".team__toggle");
      var bio = card.querySelector(".team__bio");
      if (!btn) return;

      function setOpen(open) {
        if (open) closeAll(card);
        card.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        if (bio) bio.setAttribute("aria-hidden", open ? "false" : "true");
      }

      if (hoverCapable) {
        // Open on hover; click still toggles (and is the path on touch).
        card.addEventListener("mouseenter", function () { setOpen(true); });
        card.addEventListener("mouseleave", function () { setOpen(false); });
      }
      btn.addEventListener("click", function () {
        setOpen(!card.classList.contains("is-open"));
      });
    });

    if (prevBtn) prevBtn.addEventListener("click", function () { nudge(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { nudge(1); });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    doc.addEventListener("click", function (e) {
      if (!carousel.contains(e.target)) closeAll(null);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" || e.key === "Esc") closeAll(null);
    });

    update();
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
    // endpoint to actually deliver mail to contact@bhimgurung.com.
    if (statusEl) statusEl.textContent = "Thanks — your message has been sent. Bhim will be in touch.";
    form.reset();
  });
})();

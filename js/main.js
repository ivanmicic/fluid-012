(function () {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  var year = document.querySelector("[data-year]");
  var lockSolid = header && header.getAttribute("data-header") === "solid";

  if (year) year.textContent = String(new Date().getFullYear());

  var form = document.querySelector("[data-whatsapp]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var phone = "381603005900";
      var english = document.documentElement.lang === "en";
      var marka = form.querySelector("[name=marka]").value;
      var opis = form.querySelector("[name=opis]").value.trim();
      var adresa = form.querySelector("[name=adresa]").value.trim();
      var klijent = form.querySelector("[name=klijent]").value.trim();
      var message = english
        ? "🛠️ *NEW FAULT REPORT — FLUID 012*\n\n" +
          "• *Boiler:* " + marka + "\n" +
          "• *Problem / fault code:* " + opis + "\n" +
          "• *Address:* " + adresa + "\n" +
          "• *Customer:* " + klijent + "\n\n" +
          "_(Sent from the Fluid 012 website)_"
        : "🛠️ *NOVA PRIJAVA KVARA — FLUID 012*\n\n" +
          "• *Marka kotla:* " + marka + "\n" +
          "• *Opis / Kod greške:* " + opis + "\n" +
          "• *Adresa:* " + adresa + "\n" +
          "• *Klijent:* " + klijent + "\n\n" +
          "_(Šaljem sa sajta Fluid 012)_";
      var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
      var opened = window.open(url, "_blank");
      if (opened) opened.opener = null;
      else location.assign(url);
    });
  }

  function onScroll() {
    if (!header || lockSolid) return;
    header.classList.toggle("is-solid", window.scrollY > 12);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
  }

  if (location.protocol === "file:") return;

  var origin = location.origin;

  function toAbsolute(value) {
    if (typeof value !== "string" || value.indexOf("http") === 0) return value;
    if (value.charAt(0) === "/") return origin + value;
    return value;
  }

  document.querySelectorAll('meta[property="og:image"], meta[property="og:url"], meta[name="twitter:image"]').forEach(function (meta) {
    var content = meta.getAttribute("content");
    if (content && content.charAt(0) === "/") meta.setAttribute("content", origin + content);
  });

  var ld = document.getElementById("ld");
  if (!ld) return;

  try {
    var data = JSON.parse(ld.textContent);
    var walk = function (node) {
      if (Array.isArray(node)) return node.map(walk);
      if (!node || typeof node !== "object") return node;
      Object.keys(node).forEach(function (key) {
        if (key === "url" || key === "image" || key === "@id" || key === "logo" || key === "contentUrl") {
          node[key] = toAbsolute(node[key]);
        } else {
          node[key] = walk(node[key]);
        }
      });
      return node;
    };
    ld.textContent = JSON.stringify(walk(data));
  } catch (error) {
    /* JSON-LD ostaje u obliku iz HTML-a. */
  }
})();

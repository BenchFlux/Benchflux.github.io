// Smooth scroll for any button/link with data-scroll-target
document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-scroll-target]");
    if (!target) return;
    const sel = target.getAttribute("data-scroll-target");
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
  
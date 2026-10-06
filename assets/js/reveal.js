// Fade sections in as they scroll into view.
(function () {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("js-reveal");
  const targets = document.querySelectorAll(
    ".post article > h2, .post article > .publications, .post article > .news, .about-details > *, .publications ol.bibliography > li, .social"
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  targets.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
})();

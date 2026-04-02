const revealElements = document.querySelectorAll("[data-reveal]");

if (!("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  };

  const revealObserver = new IntersectionObserver(onIntersect, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

if (window.jQuery && typeof window.jQuery.fn.owlCarousel === "function") {
  window.jQuery(() => {
    window.jQuery(".cast-carousel").owlCarousel({
      loop: true,
      margin: 14,
      nav: true,
      dots: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 3200,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        560: { items: 2 },
        768: { items: 3 },
        1024: { items: 6 },
      },
    });
  });
}

const slideEls = document.querySelectorAll('.slide-left, .slide-right');

  function handleSlideIn() {
    slideEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('slide-visible');
      }
    });
  }

  window.addEventListener('scroll', handleSlideIn);
  window.addEventListener('load', handleSlideIn);
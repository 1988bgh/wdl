export const instagramHandler = (() => {
  const options = {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".instagram__controller .next",
      prevEl: ".instagram__controller .prev",
    },
    on: {
      init: function () {},
      realIndexChange: (_this) => {},
      slideChangeTransitionEnd: (_this) => {},
    },
  };
  const status = {
    swiper: null,
  };

  let currentIndex = 0;

  const method = {};

  const bindEvent = () => {};

  const initialize = () => {
    status.swiper = new Swiper(".instagram__latest", options);
  };

  return {
    init: initialize,
  };
})();

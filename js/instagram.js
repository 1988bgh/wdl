export const instagramHandler = (() => {
  const options = {
    loop: true,
    slidesPerView: 2,
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

  async function logJSONData() {
    const response = await fetch(
      "https://feeds.behold.so/N6INLIZ3PjNnkcBJqqKe"
    );
    const jsonData = await response.json();

    document.querySelector(".instagram__latest .swiper-wrapper").innerHTML = `
      <li class="swiper-slide">
        <a href="${jsonData[0].permalink}" cursor-class="arrow" target='_blank'>
          <span class='instagram__id'>
            <span class='instagram__logo'>
              <img src="./images/common/instagram-logo.svg">  
            </span>  
            wellnessdietlab
            <span class='instagram__more'><i class="fa-solid fa-ellipsis"></i></span>
          </span>
          <picture>
            <img src="${jsonData[0].mediaUrl}" alt="" />
          </picture>
          <span class="instagram__icon-box">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
            <i class="fa-regular fa-bookmark last"></i>
          </span>
        </a>
      </li>
      <li class="swiper-slide">
        <a href="${jsonData[1].permalink}" cursor-class="arrow" target='_blank'>
          <span class='instagram__id'>
            <span class='instagram__logo'>
              <img src="./images/common/instagram-logo.svg">  
            </span>  
            wellnessdietlab
            <span class='instagram__more'><i class="fa-solid fa-ellipsis"></i></span>
          </span>
          <picture>
            <img src="${jsonData[1].mediaUrl}" alt="" />
          </picture>
          <span class="instagram__icon-box">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
            <i class="fa-regular fa-bookmark last"></i>
          </span>
        </a>
      </li>
      <li class="swiper-slide">
        <a href="${jsonData[2].permalink}" cursor-class="arrow" target='_blank'>
          <span class='instagram__id'>
            <span class='instagram__logo'>
              <img src="./images/common/instagram-logo.svg">  
            </span>  
            wellnessdietlab
            <span class='instagram__more'><i class="fa-solid fa-ellipsis"></i></span>
          </span>
          <picture>
            <img src="${jsonData[2].mediaUrl}" alt="" />
          </picture>
          <span class="instagram__icon-box">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
            <i class="fa-regular fa-bookmark last"></i>
          </span>
        </a>
      </li>
      <li class="swiper-slide">
        <a href="${jsonData[3].permalink}" cursor-class="arrow" target='_blank'>
          <span class='instagram__id'>
            <span class='instagram__logo'>
              <img src="./images/common/instagram-logo.svg">  
            </span>  
            wellnessdietlab
            <span class='instagram__more'><i class="fa-solid fa-ellipsis"></i></span>
          </span>
          <picture>
            <img src="${jsonData[3].mediaUrl}" alt="" />
          </picture>
          <span class="instagram__icon-box">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
            <i class="fa-regular fa-bookmark last"></i>
          </span>
        </a>
      </li>
      <li class="swiper-slide">
        <a href="${jsonData[4].permalink}" cursor-class="arrow" target='_blank'>
          <span class='instagram__id'>
            <span class='instagram__logo'>
              <img src="./images/common/instagram-logo.svg">  
            </span>  
            wellnessdietlab
            <span class='instagram__more'><i class="fa-solid fa-ellipsis"></i></span>
          </span>
          <picture>
            <img src="${jsonData[4].mediaUrl}" alt="" />
          </picture>
          <span class="instagram__icon-box">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
            <i class="fa-regular fa-bookmark last"></i>
          </span>
        </a>
      </li>
      <li class="swiper-slide">
        <a href="${jsonData[5].permalink}" cursor-class="arrow" target='_blank'>
          <span class='instagram__id'>
            <span class='instagram__logo'>
              <img src="./images/common/instagram-logo.svg">  
            </span>  
            wellnessdietlab
            <span class='instagram__more'><i class="fa-solid fa-ellipsis"></i></span>
          </span>
          <picture>
            <img src="${jsonData[5].mediaUrl}" alt="" />
          </picture>
          <span class="instagram__icon-box">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
            <i class="fa-regular fa-bookmark last"></i>
          </span>
        </a>
      </li>
      `;

    status.swiper = new Swiper(".instagram__latest", options);
  }

  const initialize = () => {
    logJSONData();
  };

  return {
    init: initialize,
  };
})();

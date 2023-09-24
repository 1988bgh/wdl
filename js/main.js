import { loadingMotion } from "./loading.js";
import { smoothScroll } from "./smooth.js";
import { motionsScroll } from "./motions.js";
import { popupHandler } from "./popup.js";
import { instagramHandler } from "./instagram.js";
import { pageMoveHandler } from "./header.js";

const scrollProject = (() => {
  const settingHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const headerProgress = () => {
    const progressBar = document.querySelector("header .progressbar");

    const _animate = () => {
      progressBar.style.width = `${
        (scrollY / (document.documentElement.offsetHeight - innerHeight)) * 100
      }%`;
    };
    return {
      animate: _animate(),
    };
  };

  const introMotions = () => {
    const objs = {
      motions_wrap: document.querySelector(".c__intro"),
      motions_typo_box: document.querySelector(".intro__typo-box"),
      motions_typo_a: document.querySelector(".intro__typo-a"),
      motions_typo_b: document.querySelector(".intro__typo-b"),
      motions_typo_c: document.querySelector(".intro__typo-c"),
      motions_typo_d: document.querySelector(".intro__typo-d"),
      motions_typo_e: document.querySelector(".intro__typo-e"),
      motions_typo_desc: document.querySelectorAll(".intro__desc"),
      motions_image_box: document.querySelector(".intro__image-box"),
      motions_images: document.querySelectorAll(".intro__images"),

      motions_scroll_mark: document.querySelector(".intro__scroll-mark"),
    };

    let elementInfo = motionsScroll.setTheLayout(objs.motions_wrap);

    const values = {
      opacity_out_typo_a: {
        startPoint: 0,
        endPoint: 0.2,
        startValue: 1,
        endValue: 0,
      },
      move_out_typo_a: {
        startPoint: 0.05,
        endPoint: 0.2,
        startValue: 50,
        endValue: 100,
      },
      opacity_in_typo_b: {
        startPoint: 0.15,
        endPoint: 0.3,
        startValue: 0,
        endValue: 1,
      },
      move_in_typo_b: {
        startPoint: 0.1,
        endPoint: 0.3,
        startValue: 20,
        endValue: -50,
      },
      opacity_out_typo_b: {
        startPoint: 0.32,
        endPoint: 0.4,
        startValue: 1,
        endValue: 0,
      },
      opacity_in_typo_d: {
        startPoint: 0.3,
        endPoint: 0.31,
        startValue: 0,
        endValue: 1,
      },
      move_in_typo_d: {
        startPoint: 0.4,
        endPoint: 0.5,
        startValue: -61.9,
        endValue: -50,
      },
      opacity_in_typo_c: {
        startPoint: 0.4,
        endPoint: 0.45,
        startValue: 0,
        endValue: 1,
      },

      move_in_typo_c: {
        startPoint: 0.38,
        endPoint: 0.5,
        startValue: -40,
        endValue: -50,
      },

      opacity_in_typo_e: {
        startPoint: 0.4,
        endPoint: 0.45,
        startValue: 0,
        endValue: 1,
      },

      move_in_typo_e: {
        startPoint: 0.38,
        endPoint: 0.5,
        startValue: -32,
        endValue: -50,
      },

      scale_down_typo: {
        startPoint: 0.52,
        endPoint: 0.6,
        startValue: 1,
        endValue: 0.6,
      },
      move_left_typo: {
        startPoint: 0.52,
        endPoint: 0.6,
        startValue: -50,
        endValue: -80,
      },
      move_align_typo_c: {
        startPoint: 0.52,
        endPoint: 0.6,
        startValue: -50,
        endValue: -56.6,
      },
      image_opacity_in: {
        startPoint: 0.52,
        endPoint: 0.55,
        startValue: 0,
        endValue: 1,
      },
      image_move_up: {
        startPoint: 0.55,
        endPoint: 0.6,
        startValue: 70,
        endValue: 0,
      },
      mark_opacity_out: {
        startPoint: 0,
        endPoint: 0.02,
        startValue: 1,
        endValue: 0,
      },
    };

    const _animate = () => {
      objs.motions_typo_a.style.opacity = motionsScroll.calcValue(
        elementInfo,
        values.opacity_out_typo_a,
        scrollY
      );
      objs.motions_typo_a.style.transform = `translate3d(-50%,-${motionsScroll.calcValue(
        elementInfo,
        values.move_out_typo_a,
        scrollY
      )}%,0)`;
      if (motionsScroll.calcRatio(elementInfo, scrollY) < 0.31) {
        objs.motions_typo_b.style.opacity = motionsScroll.calcValue(
          elementInfo,
          values.opacity_in_typo_b,
          scrollY
        );
      }
      objs.motions_typo_b.style.transform = `translate3d(-50%,${motionsScroll.calcValue(
        elementInfo,
        values.move_in_typo_b,
        scrollY
      )}%,0)`;

      if (motionsScroll.calcRatio(elementInfo, scrollY) > 0.31) {
        objs.motions_typo_b.style.opacity = motionsScroll.calcValue(
          elementInfo,
          values.opacity_out_typo_b,
          scrollY
        );
      }

      objs.motions_typo_d.style.opacity = motionsScroll.calcValue(
        elementInfo,
        values.opacity_in_typo_d,
        scrollY
      );

      objs.motions_typo_d.style.transform = `translate3d(${motionsScroll.calcValue(
        elementInfo,
        values.move_in_typo_d,
        scrollY
      )}%,-50%,0)`;

      objs.motions_typo_c.style.opacity = motionsScroll.calcValue(
        elementInfo,
        values.opacity_in_typo_c,
        scrollY
      );

      objs.motions_typo_c.style.transform = `translate3d(${motionsScroll.calcValue(
        elementInfo,
        values.move_in_typo_c,
        scrollY
      )}%,-150%,0)`;

      objs.motions_typo_e.style.opacity = motionsScroll.calcValue(
        elementInfo,
        values.opacity_in_typo_c,
        scrollY
      );

      objs.motions_typo_e.style.transform = `translate3d(${motionsScroll.calcValue(
        elementInfo,
        values.move_in_typo_c,
        scrollY
      )}%,50%,0)`;

      objs.motions_typo_box.style.transform = `translate3d(${motionsScroll.calcValue(
        elementInfo,
        values.move_left_typo,
        scrollY
      )}%,-50%,0) scale(${motionsScroll.calcValue(
        elementInfo,
        values.scale_down_typo,
        scrollY
      )})`;

      if (motionsScroll.calcRatio(elementInfo, scrollY) >= 0.52) {
        objs.motions_typo_c.style.transform = `translate3d(${motionsScroll.calcValue(
          elementInfo,
          values.move_align_typo_c,
          scrollY
        )}%,-150%,0)`;
      }

      objs.motions_image_box.style.opacity = `${motionsScroll.calcValue(
        elementInfo,
        values.image_opacity_in,
        scrollY
      )}`;

      objs.motions_image_box.style.transform = `translate3d(0,${motionsScroll.calcValue(
        elementInfo,
        values.image_move_up,
        scrollY
      )}%,0)`;

      if (motionsScroll.calcRatio(elementInfo, scrollY) < 0.6) {
        objs.motions_typo_desc[0].classList.remove("on");
        objs.motions_typo_desc[1].classList.remove("on");
        objs.motions_typo_desc[2].classList.remove("on");

        objs.motions_images[0].classList.add("on");
      }
      if (
        motionsScroll.calcRatio(elementInfo, scrollY) > 0.6 &&
        motionsScroll.calcRatio(elementInfo, scrollY) < 0.7
      ) {
        objs.motions_typo_desc[0].classList.add("on");
        objs.motions_images[0].classList.add("on");
      }

      if (motionsScroll.calcRatio(elementInfo, scrollY) < 0.7) {
        objs.motions_typo_desc[1].classList.remove("on");
        objs.motions_images[1].classList.remove("on");
      }
      if (
        motionsScroll.calcRatio(elementInfo, scrollY) > 0.7 &&
        motionsScroll.calcRatio(elementInfo, scrollY) < 0.8
      ) {
        objs.motions_typo_desc[0].classList.remove("on");
        objs.motions_typo_desc[1].classList.add("on");

        objs.motions_images[1].classList.add("on");
      }

      if (motionsScroll.calcRatio(elementInfo, scrollY) < 0.8) {
        objs.motions_typo_desc[2].classList.remove("on");
        objs.motions_images[2].classList.remove("on");
      }
      if (motionsScroll.calcRatio(elementInfo, scrollY) > 0.8) {
        objs.motions_typo_desc[1].classList.remove("on");
        objs.motions_typo_desc[2].classList.add("on");

        objs.motions_images[2].classList.add("on");
      }

      objs.motions_scroll_mark.style.opacity = `${motionsScroll.calcValue(
        elementInfo,
        values.mark_opacity_out,
        scrollY
      )}`;
    };

    return {
      animate: _animate(),
    };
  };

  const teacherMotion = () => {
    const objs = {
      motions_wrap: document.querySelector(".c__profile"),
      motions_grid_box: document.querySelector(".profile__grid-box"),
    };

    let elementInfo = motionsScroll.setTheLayout(objs.motions_wrap);

    const values = {
      move_x: {
        startPoint: 0,
        endPoint: 1,
        startValue: 0,
        endValue: 200,
      },
    };

    const _animate = () => {
      objs.motions_grid_box.style.transform = `translate3d(-${motionsScroll.calcValue(
        elementInfo,
        values.move_x,
        scrollY
      )}vw,0,0)`;
    };

    return {
      animate: _animate(),
    };
  };

  const _animate = () => {
    headerProgress().animate;
    introMotions().animate;
    teacherMotion().animate;
  };

  const _resize = () => {
    _animate();
    settingHeight();
  };

  const _onScroll = () => {
    requestAnimationFrame(_animate);
  };

  const _addEvent = () => {
    document.addEventListener("scroll", _onScroll);
    window.addEventListener("resize", _resize);
  };

  const _initialize = () => {
    loadingMotion();
    pageMoveHandler();
    smoothScroll.init();
    popupHandler();
    instagramHandler.init();
    _addEvent();
    _resize();
  };

  return {
    init: _initialize,
  };
})();

onload = scrollProject.init();

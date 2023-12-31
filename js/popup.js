import { smoothScroll } from "./smooth.js";

export const popupHandler = () => {
  const bodyEl = document.querySelector("body");
  const popupScrollEl = document.querySelector(".profile__popup-box");
  const popupEl = document.querySelector(".profile__popup");
  const closedBtn = popupEl.querySelector(".closed__btn");
  const openBtnWrap = document.querySelector(".profile__grid-box");

  let targetElem;

  openBtnWrap.addEventListener("click", (e) => {
    smoothScroll.status.mode = "popup";
    smoothScroll.addEvent();
    targetElem = e.target;

    while (!targetElem.classList.contains("profile__popup-open")) {
      targetElem = targetElem.parentNode;

      if (targetElem.nodeName === "BODY") {
        targetElem = null;
        return;
      }
    }
    popupEl.classList.add("open");
    bodyEl.classList.add("open");
    popupScrollEl.scrollTop = 0;
  });

  closedBtn.addEventListener("click", () => {
    smoothScroll.status.mode = "null";
    smoothScroll.addEvent();
    popupEl.classList.remove("open");
    bodyEl.classList.remove("open");
  });
};

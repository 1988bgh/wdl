export const loadingMotion = () => {
  const body = document.querySelector("body");
  const loadingEl = document.querySelector(".c__loading");

  body.classList.add("open");

  setTimeout(() => {
    loadingEl.classList.add("loaded");
    body.classList.remove("open");
  }, 4000);

  loadingEl.addEventListener("transitionend", () => {
    loadingEl.style.display = "none";
  });
};

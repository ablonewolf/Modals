"use strict";
const Modals = document.querySelector(".modal");
const overlays = document.querySelector(".overlay");
const OpenButtonModals = document.querySelectorAll(".show-modal");
const CloseButtonModals = document.querySelector(".close-modal");

const CloseModals = function () {
  Modals.classList.add("hidden");
  overlays.classList.add("hidden");
};

const OpenModals = function () {
  Modals.classList.remove("hidden");
  overlays.classList.remove("hidden");
};
// console.log(Modals.textContent);
for (let i = 0; i < OpenButtonModals.length; i++) {
  //   console.log(OpenButtonModals[i].textContent);
  OpenButtonModals[i].addEventListener("click", OpenModals);
}

CloseButtonModals.addEventListener("click", CloseModals);
overlays.addEventListener("click", CloseModals);

document.addEventListener("keydown", function (keyevent) {
  if (keyevent.key === "Escape") CloseModals();
});

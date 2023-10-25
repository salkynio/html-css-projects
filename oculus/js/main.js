"use strict";

const tabItem = document.querySelectorAll("tabs_btn-item");
const tabContent = document.querySelectorAll("tabs_content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs_btn-item--active");
  });

  tabContent.forEach(function (item) {
    item.classList.remove("tabs_content-item--active");
  });

  tabTarget.classList.add("tabs_btn-item--active");
  document
    .querySelectorAll(`#${button}`)
    .classList.add("tabs_content-item--active");
}

"use strict";
// Variables
// Flickity
const elem = document.querySelector(".gallery-carousel");

// Overlay
const overlay = document.querySelectorAll(".overlay");
const galleryBack = document.querySelectorAll(".gOverlay");
// Overlay

const popUp = document.querySelectorAll(".pop-up");
const closePopUp = document.querySelectorAll(".close-pop-up");
const openPopUp = document.querySelectorAll(".open-pop-up");
const openGallery = document.querySelectorAll(".open-gallery");
const galleryOverlay = document.querySelectorAll(".gallery");
const swiperOverlay = document.querySelector(".swiper");
const hideGallery = document.querySelectorAll(".gallery-close-btn");
const mainCarousel = document.querySelectorAll("main-carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// Copy Function Variables
const copyBtn = document.querySelectorAll(".copy-btn");
const textToCopy = document.querySelectorAll(".text-to-copy");
const message = document.getElementById("message");
// Copy Function Variables

let currentCarouselItem = 0;

// Scrollable Div
const scrollableDiv = document.querySelector(".scrollable-div");
// Scrollable Div

// Variables

// Line Pop Up
const showPopUp = function (i) {
  popUp[i].classList.remove("hidden");
  overlay[i].classList.remove("hidden");
  document.body.classList.add("disable-scroll");
};

const hidePopUp = function (i) {
  popUp[i].classList.add("hidden");
  overlay[i].classList.add("hidden");
  document.body.classList.remove("disable-scroll");
};

for (let i = 0; i < openPopUp.length; i++) {
  // openPopUp[i].addEventListener("click", showPopUp(i));

  // closePopUp[i].addEventListener("click", hidePopUp(i));

  // overlay[i].addEventListener("click", hidePopUp(i));
  openPopUp[i].addEventListener("click", function () {
    showPopUp(i);
  });

  closePopUp[i].addEventListener("click", function () {
    hidePopUp(i);
  });

  overlay[i].addEventListener("click", function () {
    hidePopUp(i);
  });
}
// Line Pop Up

// overlay.addEventListener("click", function () {
//   hidePopUp;
// });

// Gallery PopUp
// const showGallery = function (i) {
//   galleryOverlay[i].classList.remove("hidden");
//   galleryBack[i].classList.remove("hidden");
//   console.log("Something has been clicked!");
//   document.body.classList.add("disable-scroll");
// };

// const closeGallery = function (i) {
//   galleryOverlay[i].classList.add("hidden");
//   galleryBack[i].classList.add("hidden");
//   document.body.classList.remove("disable-scroll");
// };

// for (let i = 0; i < openGallery.length; i++) {
//   openGallery[i].addEventListener("click", function () {
//     showGallery(i);
//   });

//   hideGallery[i].addEventListener("click", function () {
//     closeGallery(i);
//   });

//   galleryBack[i].addEventListener("click", function () {
//     closeGallery(i);
//   });
// }

// ******************************SWIPER JS****************************** //
const showGallery = function (i) {
  galleryOverlay[i].classList.remove("hidden");
  galleryBack[i].classList.remove("hidden");
  console.log("Something has been clicked!");
  document.body.classList.add("disable-scroll");
};

const closeGallery = function (i) {
  galleryOverlay[i].classList.add("hidden");
  galleryBack[i].classList.add("hidden");
  document.body.classList.remove("disable-scroll");
};

for (let i = 0; i < openGallery.length; i++) {
  openGallery[i].addEventListener("click", function () {
    showGallery(i);
  });

  hideGallery[i].addEventListener("click", function () {
    closeGallery(i);
  });

  galleryBack[i].addEventListener("click", function () {
    closeGallery(i);
  });
}

// ******************************SWIPER JS****************************** //

if (document.body) {
  console.log("The page has loaded up!");
}
console.log("JavaScript is working!");

// Body Scroll
// Function to disable body scrolling
const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

// Function to enable body scrolling
const enableBodyScroll = () => {
  document.body.style.overflow = "auto";
};

scrollableDiv.addEventListener("mouseenter", disableBodyScroll);
scrollableDiv.addEventListener("mouseleave", enableBodyScroll);

// Copy Function Event Listener
for (let i = 0; copyBtn.length > i; i++) {
  copyBtn[i].addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(textToCopy[i].textContent);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  });
}

// Audio (Temporary Off)
window.onload = function () {
  let audio = new Audio("../Audio/AYAM DIDIK - INSTRUMENTAL.mp3");
  audio.play();
  audio.loop = true;
  audio.volume = 0.03;
};

// 取代旧的 parallax 代码
// —— 开始 ——
// 1. 初始化：把每张图和它的速度、当前位置存为对象
const imagesState = Array.from(document.querySelectorAll(".parallax-img")).map(
  (img) => ({
    el: img,
    speed: parseFloat(img.dataset.speed),
    y: 0, // 记录当前 transformY
  })
);

let latestScrollY = 0;
let ticking = false;

// 2. 监听 scroll，只更新目标值 latestScrollY
window.addEventListener("scroll", () => {
  latestScrollY = window.pageYOffset;
  if (!ticking) requestAnimationFrame(updateParallax);
  ticking = true;
});

// 3. 缓动更新函数
function updateParallax() {
  imagesState.forEach((obj) => {
    // 目标位置
    const targetY = -latestScrollY * obj.speed;
    // 缓动插值：当前位置向目标位置靠近 10%
    obj.y += (targetY - obj.y) * 0.1;
    // 应用 GPU 加速的 translate3d
    obj.el.style.transform = `translate3d(0, ${obj.y}px, 0)`;
  });
  // 每帧都请求下一帧，直到缓动接近完成
  requestAnimationFrame(updateParallax);
}
// —— 结束 ——

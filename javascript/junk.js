"use strict";

// setInterval(() => {
//   location.reload();
// }, 15000);

// Gallery
// prevBtn.addEventListener("click", function () {
//   currentCarouselItem--;
//   if (currentCarouselItem < 0) {
//     currentCarouselItem = gallerySY.length - 1;
//     console.log(currentCarouselItem);
//   }
// });

// nextBtn.addEventListener("click", function () {
//   currentCarouselItem++;
//   if (currentCarouselItem > 2) {
//   }
//   console.log(currentCarouselItem);
// });

// Day / Night Mode //
// document.querySelector(".checkbox").addEventListener("change", function () {
//   const navBtns = document.querySelectorAll(".nav-btn");
//   const socials = document.querySelectorAll(".socials");
//   const cards = document.querySelectorAll(".card");

//   if (this.checked) {
//     document.querySelector(".header").style.backgroundColor = "#181818";
//     document.body.style.backgroundColor = "rgb(50, 50, 50)";
//     document.body.style.backgroundColor = "#121212";
//     document.body.style.color = "white";
//     document.querySelector(".footer").style.backgroundColor = "#181818";
//     console.log("Night Mode Activated! 🌙");

//     cards.forEach(function (card) {
//       card.style.backgroundColor = "#181818";
//     });

//     socials.forEach(function (social) {
//       social.style.fill = "white";
//     });

//     navBtns.forEach(function (navBtn) {
//       navBtn.style.color = "white";
//     });
//     // setInterval();
//   } else {
//     document.querySelector(".header").style.backgroundColor = "";
//     document.body.style.backgroundColor = "";
//     document.body.style.color = "black";
//     document.querySelector(".footer").style.backgroundColor = "";

//     console.log("Day Mode Activated! 🌤️");

//     cards.forEach(function (card) {
//       card.style.backgroundColor = "";
//     });

//     socials.forEach(function (social) {
//       social.style.fill = "";
//     });

//     navBtns.forEach(function (navBtn) {
//       navBtn.style.color = "#212529"; // Or the default color for day mode
//     });
//   }
// });
// Day / Night Mode //

// Canvas
// function displayImageOnCanvas(src) {
//   const img = new Image();
//   img.src = src;

//   img.onload = function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   };
// }

// document.querySelectorAll(".gallery-photo").forEach((photo) => {
//   photo.addEventListener("click", function () {
//     displayImageOnCanvas(photo.src);
//   });
// });
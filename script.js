/*javaScript kodları */

const main = document.querySelector("main-1");

const menu = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blur = document.querySelector('.blur');
const side = document.querySelector('.hdn-side');

menu.addEventListener("click", () => {
    side.classList.add("active");
    blur.classList.add("active");
});

cross.addEventListener("click", () => {
    side.classList.remove("active");
    blur.classList.remove("active");
});
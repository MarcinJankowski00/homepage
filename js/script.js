console.log("Witaj świecie");

/* Button- removes photo */
let button = document.querySelector(".js-section__button");
let photo = document.querySelector(".js-section__photo");

button.addEventListener("click", () => {
    photo.remove();
    button.remove();
});

/* Button- switches website mode */
let modeswitcher = document.querySelector(".js-navigation__modeswitcher");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

modeswitcher.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});
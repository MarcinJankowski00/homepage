console.log("Witaj świecie");

/* Button- switches website mode */
let modeswitcher = document.querySelector(".js-navigation__modeswitcher");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

modeswitcher.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});
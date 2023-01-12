{
    const onButtonClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body--dark");

        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const modeswitcher = document.querySelector(".js-navigation__modeswitcher");
        modeswitcher.addEventListener("click", onButtonClick);
    };

    init()
}
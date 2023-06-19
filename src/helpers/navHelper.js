export function collapsingMenu() {
    const elementTrigger = document.getElementById("basic-navbar-nav");
    elementTrigger.classList.remove("show");
}

// export function preventScroll() {
//     const spiedElement = document.getElementById("basic-navbar-nav");
//     const elementIconCross = document.getElementById("cross-menu-09333");
//     const elementIconHamburger = document.getElementById("hamburger-menu-09332");
//     if (spiedElement.classList.contains("show")) {
//         document.body.classList.add("mobile-menu");
//     } else if (!spiedElement.classList.contains("show")) {
//         document.body.classList.remove("mobile-menu");
//     }
// }

export function preventScroll(myElement, show) {
    const element = document.getElementById("basic-navbar-nav");
    const body = document.body;

    if (element.classList.contains(show)) {
        body.classList.add(myElement);
    } else {
        body.classList.remove(myElement)
    }
}
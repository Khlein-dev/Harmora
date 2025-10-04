const body = document.getElementsByTagName('body')[0];
const cover = document.getElementsByClassName('cover')[0];
const login = document.getElementsByClassName('login')[0];

const defaultColor = "#020216";
body.style.backgroundColor = defaultColor;
body.style.transition = "800ms ease-in-out";

login.addEventListener("mouseover", () => {
    body.style.backgroundColor = "#6addedff";
    body.style.transition = "800ms ease-in-out";
});

login.addEventListener("mouseout", () => {
    body.style.backgroundColor = defaultColor;
});
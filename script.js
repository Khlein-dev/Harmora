
const background = document.getElementsByTagName("body")[0];
// Buttons
const search = document.getElementsByClassName("searchButton")[0];
const github = document.getElementsByClassName("github")[0];
const div = document.querySelectorAll("div")[0];

search.addEventListener("mouseover", () => {
    background.style.backgroundColor = "#54048aff";
    background.style.transition = "800ms ease-in-out";
});

search.addEventListener("mouseout", () => {
    background.style.backgroundColor = "#05053aff";
    background.style.transition = "800ms ease-in-out";
});

github.addEventListener("mouseover", () => {
    background.style.backgroundColor = "#3f9983ff";
    background.style.transition = "800ms ease-in-out";
});

github.addEventListener("mouseout", () => {
    background.style.backgroundColor = "#05053aff";
    background.style.transition = "800ms ease-in-out";
});



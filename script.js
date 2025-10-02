const background = document.getElementsByTagName("body")[0];
// Buttons
const search = document.getElementsByClassName("searchButton")[0];
const github = document.getElementsByClassName("github")[0];
const div = document.querySelectorAll("div")[0];
const settings = document.getElementsByClassName("settings")[0];

const defaultColor = "#05053aff";
background.style.backgroundColor = defaultColor;
background.style.transition = "800ms ease-in-out";

// Hover effects for buttons
function setupButtonHover(element, color) {
    element.addEventListener("mouseover", () => {
        background.style.backgroundColor = color;
        background.style.transition = "800ms ease-in-out";
    });

    element.addEventListener("mouseout", () => {
        background.style.backgroundColor = defaultColor;
    });
}

setupButtonHover(search, "#54048aff");
setupButtonHover(github, "#3f9983ff");
setupButtonHover(settings, "#ff7b00ff");

// ALBUM CARDS HOVER EFFECTS
const lana = document.getElementById("LANA");
const billie = document.getElementById("BILLIE");
const ariana = document.getElementById("ARIANA");
const eminem = document.getElementById("EMINEM");

// 🎵 Define sounds for each artist
const sounds = {
    lana: new Audio("songs/cola.mp3"),
    billie: new Audio("songs/badguy.mp3"),
    ariana: new Audio("songs/positions.mp3"),
    eminem: new Audio("songs/superman.mp3")
};

Object.values(sounds).forEach(sound => {
    sound.volume = 0.1; // turn down to 50%
});

// Stop all sounds helper
function stopAllSounds() {
    Object.values(sounds).forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
}

// Hover setup with sound
function setupHover(element, color, sound) {
    element.addEventListener("mouseover", () => {
        background.style.backgroundColor = color;
        background.style.transition = "800ms ease-in-out";

        stopAllSounds(); // make sure only one plays
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    });

    element.addEventListener("mouseout", () => {
        background.style.backgroundColor = defaultColor;

        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    });
}

// Apply to albums
setupHover(lana, "#6cb7e5ff", sounds.lana);
setupHover(billie, "#d5bf32ff", sounds.billie);
setupHover(ariana, "#24b182ff", sounds.ariana);
setupHover(eminem, "#ff0000ff", sounds.eminem);

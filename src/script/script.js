// set color
const root = document.querySelector(":root");
const lightBtn = document.querySelectorAll(".light-icon > div");

function togClass() {
    lightBtn[1].classList.toggle("hidden");
    lightBtn[0].classList.toggle("hidden");
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-color", "dark");
    lightBtn[1].classList.add("hidden");
} else {
    root.setAttribute("data-color", "light");
    lightBtn[0].classList.add("hidden");
};

lightBtn.forEach(i => {
    i.addEventListener("click", () => {
        let modeBtn = i.classList[0];
        root.setAttribute("data-color", modeBtn);
        togClass();
    })
})

// nav bar
const navIcon = document.querySelectorAll(".nav-icon");
navIcon.forEach(i => {
    i.addEventListener("click", () => {
        navIcon.forEach(e => e.classList.remove("active"));
        i.classList.add("active");
    })
})

// setting bar
const setIcon = document.querySelector(".set-icon");
const setDiv = document.querySelector(".page-setting");
setIcon.addEventListener("click", () => {
    setDiv.classList.toggle("active");
})

const colors = document.querySelectorAll(".color");
colors.forEach(i => {
    i.addEventListener("click", () => {
        root.classList = [i.classList[1]];
    })
})
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
const article = document.querySelectorAll(".tabs-container > article");

navIcon.forEach((i, index) => {
    i.addEventListener("click", () => {
        navIcon.forEach(e => e.classList.remove("active"));
        i.classList.add("active");
        showArticle(index);
    })
})

function showArticle(num) {
    article.forEach(i => i.classList.add("disable"));
    article[num].classList.remove("disable");
}

const aboutBtn = document.querySelector("a.about-btn");
const contactBtn = document.querySelector("a.contact-btn");

function buttonArticle(num) {
    navIcon.forEach(i => i.classList.remove("active"));
    navIcon[num].classList.add("active");
    showArticle(num);
}

aboutBtn.addEventListener("click", () => buttonArticle(1));
contactBtn.addEventListener("click", () => buttonArticle(3));

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
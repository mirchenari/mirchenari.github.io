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
const root = document.querySelector(":root");
colors.forEach(i => {
    i.addEventListener("click", () => {
        root.classList = [i.classList[1]];
    })
})
const navIcon = document.querySelectorAll(".nav-icon");
navIcon.forEach(i => {
    i.addEventListener("click", () => {
        navIcon.forEach(e => e.classList.remove("active"));
        i.classList.add("active");
    })
})
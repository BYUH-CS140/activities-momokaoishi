const openBtn = document.getElementById("toggleButton");
const closeBtn = document.getElementById("closeButton");
const navBar = document.getElementById("nav-bar");
          
openBtn.addEventListener("click", () => {
    navBar.classList.add("active");
});
          
closeBtn.addEventListener("click", () => {
    navBar.classList.remove("active");
});


function togglefunction() {
    var btn = document.getElementById("collapseBtn");
    var navbar = document.getElementById("navbar-ul");
    var cross = document.getElementById("cross");
    
    if (btn) {
        btn.addEventListener("click", () => {
            navbar.classList.add("active");
        })
    }
    
    if (cross) {
        cross.addEventListener("click", () => {
            navbar.classList.remove("active");
        })
    }
    
}
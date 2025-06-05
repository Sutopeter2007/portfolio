// Sötét mód váltás
document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Érme navigáció
document.getElementById("coin").addEventListener("click", () => {
    window.location.href = "portfoliomain.html";
});
// Sötét mód váltás

document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("hatterkep").classList.toggle("bw-filter");
});



// Érme navigáció
document.getElementById("coin").addEventListener("click", () => {
    window.location.href = "masodikfelev.html";
});

// Görgetés figyelése – fejléc sötétítés eltűnik, ha nem vagyunk az elején
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.remove("dark-overlay");
    } else {
        header.classList.add("dark-overlay");
    }
});

// Alapból legyen sötét a fejléc
header.classList.add("dark-overlay");
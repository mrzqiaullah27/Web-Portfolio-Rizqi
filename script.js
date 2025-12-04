// ========== TEMA (GELAP / TERANG) ==========
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

// Set tema awal
if (savedTheme === "light") {
    body.classList.add("light");
    themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
} else {
    themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    themeToggle.innerHTML = isLight
        ? '<i class="ri-sun-line"></i>'
        : '<i class="ri-moon-line"></i>';
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ========== NAVBAR MOBILE ==========
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Tutup menu saat link diklik (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// ========== FILTER PROJEK ==========
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        projectCards.forEach((card) => {
            const category = card.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});

// ========== FORM KONTAK SEDERHANA ==========
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

function showPopup() {
    if (popup) popup.classList.add("show");
}

function hidePopup() {
    if (popup) popup.classList.remove("show");
}

if (closePopup) {
    closePopup.addEventListener("click", hidePopup);
}


if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Biar nggak reload / kirim beneran

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Harap lengkapi semua field terlebih dahulu.";
            return;
        }

                // DI SINI CUMA UI SAJA, TIDAK KIRIM EMAIL
        contactForm.reset();
        formStatus.textContent = ""; // kalau mau, kosongkan status bawah

        // Tampilkan popup sukses
        showPopup();

    });
}
// ========== TAHUN FOOTER OTOMATIS ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Close nav on click
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Highlight active nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 150) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(ln => {
    ln.classList.remove("active");
    if (ln.getAttribute("href") === `#${current}`) {
      ln.classList.add("active");
    }
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks! Your message has been submitted.");
  e.target.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

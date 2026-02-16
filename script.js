// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navigation active state based on scroll position
const sections = document.querySelectorAll(".section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNavigation() {
  const scrollPosition = window.scrollY + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// Initial check
highlightNavigation();

// Update on scroll
window.addEventListener("scroll", highlightNavigation, { passive: true });

// Mouse cursor spotlight effect (optional subtle interaction)
const mainContent = document.querySelector(".main-content");

if (mainContent && window.matchMedia("(min-width: 1024px)").matches) {
  mainContent.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".experience-item, .project-card");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        card.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(255,255,255,0.05), transparent)`;
      }
    });
  });
}

// Console message for developers
console.log(
  "%c👋 Hello, Developer!",
  "font-size: 20px; font-weight: bold; color: #5eead4;",
);
console.log(
  "%cInterested in how this site was built? The source code is clean and well-commented!",
  "font-size: 14px; color: #94a3b8;",
);

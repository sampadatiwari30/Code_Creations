// ===========================
// Mobile Menu Toggle
// ===========================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ===========================
// Tab Switching
// ===========================
const tabs = document.querySelectorAll('.skill-tabs .tab');
const cards = document.querySelectorAll('.skill-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    let category = tab.getAttribute('data-tab');

    cards.forEach((card) => {
      if (card.classList.contains(category) || category === 'all') {
        card.classList.remove('hidden');
        setTimeout(() => card.classList.add('visible'), 100);
      } else {
        card.classList.add('hidden');
        card.classList.remove('visible');
      }
    });
  });
});

// ===========================
// Animate Progress Bars on Scroll
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');

  if (!skillCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add .visible to trigger CSS animation
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 } // when 30% of the card is visible
  );

  skillCards.forEach((card) => observer.observe(card));

  // Handle cards already visible on page load
  window.addEventListener('load', () => {
    skillCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.classList.add('visible');
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  console.log("Found skill cards:", skillCards.length); // ✅ Debug

  if (!skillCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Visible:", entry.target.querySelector("span")?.textContent);
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  skillCards.forEach((card) => observer.observe(card));
});
// ===== Theme Toggle =====
const themeToggles = document.querySelectorAll("#theme-toggle");
const themeIcons = document.querySelectorAll("#theme-toggle-icon");
const body = document.body;

// 1️⃣ Load saved theme from localStorage or system preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeIcons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun"));
} else if (savedTheme === "dark") {
  body.classList.remove("light");
  themeIcons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon"));
} else {
  // No saved theme: use system preference
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    body.classList.add("light");
    themeIcons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun"));
  } else {
    body.classList.remove("light");
    themeIcons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon"));
  }
}

// 2️⃣ Toggle theme on click (works for desktop & mobile)
themeToggles.forEach(btn => {
  btn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light");

    if (isLight) {
      themeIcons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun"));
      localStorage.setItem("theme", "light");
    } else {
      themeIcons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon"));
      localStorage.setItem("theme", "dark");
    }
  });
});





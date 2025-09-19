//Tailwind JS for Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Tab Switching
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".skill-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    let category = tab.getAttribute("data-tab");

    cards.forEach((card) => {
      if (card.classList.contains(category)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Animate progress bars on scroll
const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.5 }
);
cards.forEach((card) => observer1.observe(card));

// Animated counters
const counters = document.querySelectorAll(".counter");
const speed = 200;
const counterObserver = new IntersectionObserver(
  (entries) => {
    // <-- changed name here
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => counterObserver.observe(c)); // <-- changed name here

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
    this.reset();
  });

// Typing effect
var typed = new Typed("#typed", {
  strings: ["Data Science Student", "Web Developer", "Problem Solver"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

// Select all testimonial cards and dots
const testimonialCards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let autoSlideTimer;

// Function to show the testimonial at a given index
function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.toggle("hidden", i !== index);
    card.classList.toggle("block", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-cyan-400", i === index);
    dot.classList.toggle("bg-gray-600", i !== index);
  });

  currentIndex = index;
}

// Start or reset auto-slide
function startAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    let nextIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(nextIndex);
  }, 5000);
}

// Add click event to dots (manual priority)
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showTestimonial(i);
    startAutoSlide(); // Reset timer on manual click
  });
});

// Initialize first testimonial and auto-slide
showTestimonial(currentIndex);
startAutoSlide();

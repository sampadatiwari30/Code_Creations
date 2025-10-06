// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ===== Theme Toggle =====
const themeToggles = document.querySelectorAll(".theme-toggle");
const themeIcons = document.querySelectorAll(".theme-toggle-icon");
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
// Comment Section Functionality
document.querySelectorAll('.project-card').forEach((card) => {
  const input = card.querySelector('.comment-input input');
  const button = card.querySelector('.comment-input button');
  const list = card.querySelector('.comment-list');

  function createComment(text) {
    const div = document.createElement('div');
    div.classList.add('comment');

    const p = document.createElement('p');
    p.textContent = text;
    p.contentEditable = true;
    p.style.outline = 'none';
    div.appendChild(p);

    const likeBtn = document.createElement('button');
    likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    let liked = false;
    likeBtn.addEventListener('click', () => {
      liked = !liked;
      likeBtn.style.color = liked ? 'red' : '#6c5ce7';
    });
    div.appendChild(likeBtn);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.addEventListener('click', () => div.remove());
    div.appendChild(delBtn);

    list.appendChild(div);
  }

  button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      createComment(input.value);
      input.value = '';
    }
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== '') {
      createComment(input.value);
      input.value = '';
    }
  });
});

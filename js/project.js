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
  } else {
    console.error('Theme toggle button or icon not found');
  }

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smart Scroll Button
  const scrollBtn = document.getElementById('smartScrollBtn');
  const scrollIcon = document.getElementById('scrollIcon');
  
  if (scrollBtn && scrollIcon) {
    const updateThreshold = () => Math.max(300, (document.body.scrollHeight || 800) / 3);

    const setIcon = (direction) => {
      if (direction === 'down') {
        scrollIcon.innerHTML = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>`;
        scrollBtn.setAttribute('aria-label', 'Scroll to bottom');
      } else {
        scrollIcon.innerHTML = `<path fill-rule="evenodd" d="M5.293 12.707a1 1 0 011.414 0L10 9.414l3.293 3.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" clip-rule="evenodd"/>`;
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
      }
    };

    const check = () => {
      const threshold = updateThreshold();
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      if (scrollTop < threshold) {
        setIcon('down');
      } else if (windowHeight + scrollTop >= docHeight - threshold) {
        setIcon('up');
      } else {
        setIcon('up');
      }
    };

    window.addEventListener('scroll', check);
    window.addEventListener('resize', check);
    check();

    scrollBtn.addEventListener('click', () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const threshold = updateThreshold();

      if (scrollTop < threshold) {
        window.scrollTo({ top: docHeight, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Comment Section Functionality
  document.querySelectorAll('.project-card').forEach((card) => {
    const input = card.querySelector('.comment-input input');
    const button = card.querySelector('.comment-input button');
    const list = card.querySelector('.comment-list');

    if (!input || !button || !list) return;

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
  
});
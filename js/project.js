// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Theme Toggle with localStorage
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = document.getElementById('theme-toggle-icon');

  if (toggleBtn && icon) {
    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      body.classList.add('light');
      icon.className = 'fas fa-sun text-xl';
    } else {
      body.classList.remove('light');
      icon.className = 'fas fa-moon text-xl';
    }

    // Toggle theme on button click
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('light');
      const isLight = body.classList.contains('light');
      
      if (isLight) {
        icon.className = 'fas fa-sun text-xl';
        localStorage.setItem('theme', 'light');
      } else {
        icon.className = 'fas fa-moon text-xl';
        localStorage.setItem('theme', 'dark');
      }
      
      console.log('Theme toggled to:', isLight ? 'light' : 'dark');
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
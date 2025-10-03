// Theme Toggle with localStorage
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  toggleBtn.innerHTML = isLight
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
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

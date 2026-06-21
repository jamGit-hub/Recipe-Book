
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// =====================
// HAMBURGER MENU
// =====================
function showhumb() {
  document.querySelector('.humb').style.display = 'flex';
  document.querySelector('.nav1').style.display = 'none';
}
function hidehumb() {
  document.querySelector('.humb').style.display = 'none';
  document.querySelector('.nav1').style.display = 'flex';
}

// =====================
// FAVORITES
// =====================
const favSection = document.getElementById('fav');
let favList = null;

function initFavList() {
  const content = document.getElementById('favContent');
  if (!content) return;

  if (!favList) {
    favList = document.createElement('ul');
  }

  // If already has items (refreshed page etc), keep them shown
  if (favList.children.length > 0) {
    content.innerHTML = '';
    content.classList.remove('fav-empty');
    content.appendChild(favList);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initFavList();

  // FAV BUTTONS
  document.querySelectorAll('#home article .fav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const article = btn.closest('article');
      const title = article.dataset.title || article.querySelector('h3').textContent;

      if (btn.classList.contains('saved')) return;

      showToast(`"${title}" saved to favorites!`);

      btn.textContent = 'Saved';
      btn.classList.add('saved');

      if (!favList) {
        favList = document.createElement('ul');
      }

      const exists = Array.from(favList.children).some(li => li.dataset.title === title);
      if (exists) return;

      const li = document.createElement('li');
      li.textContent = title;
      li.dataset.title = title;
      favList.appendChild(li);

      const content = document.getElementById('favContent');
      if (content) {
        content.innerHTML = '';
        content.classList.remove('fav-empty');
        content.appendChild(favList);
      }
    });
  });

  // =====================
  // FILTER CHIPS
  // =====================
  const chips = document.querySelectorAll('.chip');
  const cards = document.querySelectorAll('#home article');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.dataset.filter;

      cards.forEach(card => {
        const cats = (card.dataset.category || '').split(' ');
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = '';
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =====================
  // SEARCH
  // =====================
  const searchForm = document.getElementById('searchForm') || document.querySelector('header form.search');
  const searchInput = document.getElementById('search');

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = searchInput.value.trim().toLowerCase();
      if (!value) {
        showToast('Please enter a recipe name.');
        return;
      }

      let found = false;
      document.querySelectorAll('#home article').forEach(card => {
        const title = (card.dataset.title || card.querySelector('h3').textContent).toLowerCase();
        card.classList.remove('search-highlight');
        card.style.display = '';
      });

      document.querySelectorAll('#home article').forEach(card => {
        const title = (card.dataset.title || card.querySelector('h3').textContent).toLowerCase();
        if (title.includes(value)) {
          card.classList.add('search-highlight');
          found = true;
          if (!card.closest('#recipeGrid')) return;
          setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      });

      if (!found) {
        showToast(`No recipe found for "${searchInput.value}".`);
      } else {
        showToast(`Showing results for "${searchInput.value}"`);
      }

      // reset highlights after 3s
      setTimeout(() => {
        document.querySelectorAll('.search-highlight').forEach(c => c.classList.remove('search-highlight'));
      }, 3000);
    });

    // Live clear on empty
    searchInput.addEventListener('input', () => {
      if (!searchInput.value) {
        document.querySelectorAll('.search-highlight').forEach(c => c.classList.remove('search-highlight'));
      }
    });
  }

  // =====================
  // CONTACT FORM
  // =====================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (!name || !email || !msg) {
        showToast('Please fill in all fields.');
        return;
      }
      showToast(`Thanks, ${name}! Your message has been sent.`);
      contactForm.reset();
    });
  }

});

// =====================
// FADE-IN KEYFRAMES (injected once)
// =====================
const style = document.createElement('style');
style.textContent = '@keyframes fadeIn { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: none; } }';
document.head.appendChild(style);

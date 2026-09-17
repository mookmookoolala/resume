/* ==========================================
   Jerry Moo Kee Khong - Core JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initVisitorCounter();
  initScrollSpy();
  initShareToast();
  initMobileNav();
});

/* Theme Toggle (Light Paper vs Dark Terminal) */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('jerry_portfolio_theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (systemDark ? 'dark' : 'light');
  setTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(activeTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('jerry_portfolio_theme', theme);
  
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark' 
      ? '<span>☀️ Light Mode</span>' 
      : '<span>🌙 Dark Mode</span>';
  }
}

/* Visitor Counter */
function initVisitorCounter() {
  const counterEl = document.getElementById('v');
  if (!counterEl) return;

  fetch('https://lqk9r6hlp1.execute-api.ap-southeast-1.amazonaws.com/default/VisitorCounter')
    .then((response) => response.json())
    .then((data) => {
      if (counterEl && data.count !== undefined) {
        counterEl.textContent = data.count;
      }
    })
    .catch(() => {
      if (counterEl) counterEl.textContent = '—';
    });
}

/* ScrollSpy Active Link Tracker */
function initScrollSpy() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav a');

  function updateActiveNav() {
    let currentSection = 'about';
    const marker = window.scrollY + window.innerHeight * 0.4;
    const nearPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

    sections.forEach((section) => {
      if (marker >= section.offsetTop) currentSection = section.id;
    });

    if (nearPageBottom && sections.length > 0) {
      currentSection = sections[sections.length - 1].id;
    }

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.hash === `#${currentSection}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('load', updateActiveNav);
  updateActiveNav();
}

/* Share Clipboard Toast */
function initShareToast() {
  const shareBtn = document.getElementById('share');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      showToast('Link copied!');
    } catch {
      showToast('Unable to copy the link automatically.');
    }
  });
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

/* Mobile Menu Navigation */
function initMobileNav() {
  const menuButton = document.getElementById('mb');
  const mobileMenu = document.getElementById('mm');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => mobileMenu.classList.toggle('open'));

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }
}

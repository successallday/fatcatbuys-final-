document.addEventListener("DOMContentLoaded", () => {
  // Footer year (only if element exists)
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Dropdown logic
  const dropdownLink = document.querySelector('.nav__link--dropdown');
  const dropdownMenu = document.querySelector('.dropdown');

  if (dropdownLink && dropdownMenu) {
    // Toggle menu
    dropdownLink.addEventListener('click', (e) => {
      e.preventDefault();
      const open = dropdownMenu.classList.toggle('is-open');
      dropdownLink.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav__item--dropdown')) {
        dropdownMenu.classList.remove('is-open');
        dropdownLink.setAttribute('aria-expanded', 'false');
      }
    });

    // Close when clicking a dropdown link
    dropdownMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        dropdownMenu.classList.remove('is-open');
        dropdownLink.setAttribute('aria-expanded', 'false');
      });
    });

    // ESC key closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        dropdownMenu.classList.remove('is-open');
        dropdownLink.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

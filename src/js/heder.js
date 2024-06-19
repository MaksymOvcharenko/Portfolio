document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header-blur');
  const searchButton = document.getElementById('search-button');
  const searchContainer = document.getElementById('search-container');
  const closeButton = document.getElementById('close-button');
  const findBtn = document.querySelector('.find');

  function updateSearchContainerVisibility() {
    if (window.innerWidth > 1279) {
      searchContainer.style.display = 'block';
      closeButton.style.display = 'none';
      findBtn.style.display = 'none';
    } else {
      searchContainer.style.display = 'none';
    }
  }

  searchButton.addEventListener('click', function () {
    if (window.innerWidth <= 1280) {
      header.style.filter = 'blur(5px)';
      searchContainer.style.display = 'block';
      searchInput.focus();
    }
  });

  closeButton.addEventListener('click', function () {
    header.style.filter = 'none';
    searchContainer.style.display = 'none';
  });

  updateSearchContainerVisibility();

  window.addEventListener('resize', updateSearchContainerVisibility);
});

  
    const filterButtons = document.querySelectorAll('.filter-btn');
    const toolItems = document.querySelectorAll('.tool-item');
    const searchInput = document.getElementById('searchInput');

    let activeFilter = 'all';

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-outline-primary');
        });
        button.classList.add('btn-primary');
        button.classList.remove('btn-outline-primary');

        activeFilter = button.getAttribute('data-filter');
        applyFilters();
      });
    });

    searchInput.addEventListener('input', () => {
      applyFilters();
    });

    function applyFilters() {
      const searchText = searchInput.value.toLowerCase();
      toolItems.forEach(item => {
        const matchesFilter = activeFilter === 'all' || item.getAttribute('data-category').includes(activeFilter);
        const matchesSearch = item.querySelector('h5').textContent.toLowerCase().includes(searchText);
        item.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
      });
    }
  
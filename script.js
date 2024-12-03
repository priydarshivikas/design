const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach((radio) => {
  radio.addEventListener('change', (e) => {
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.add('hidden'));
    if (e.target.checked) {
      const dropdown = e.target.closest('.radio-Container').querySelector('.dropdown-menu');
      dropdown.classList.remove('hidden');
    }
  });
});

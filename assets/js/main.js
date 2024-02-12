// ========== Handle light and dark mode buttons ========== //
const darkModeBtn = document.getElementById('Dark');
const lightModeBtn = document.getElementById('Light');
const darkModeBox = document.getElementById('btn-dark');
const lightModeBox = document.getElementById('btn-light');

// Switch to dark mode when click on dark mode box
darkModeBtn.addEventListener('click', () => {
  document.body.classList.add('is-dark');

  lightModeBox.classList.remove('is_selected');
  darkModeBox.classList.add('is_selected');
})

// Switch to light mode when click on light mode box
lightModeBtn.addEventListener('click', () => {
  document.body.classList.remove('is-dark');

  darkModeBox.classList.remove('is_selected');
  lightModeBox.classList.add('is_selected');
})
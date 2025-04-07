// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if saved
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  document.getElementById('dark-mode-toggle').innerText = 'Light Mode';
}

// Toggle dark mode on button click
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark); // Save preference

  // Change button text
  document.getElementById('dark-mode-toggle').innerText = isDark ? 'Light Mode' : 'Dark Mode';
});
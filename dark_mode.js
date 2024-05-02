function toggleDarkMode() {
    const body = document.body;
    const darkModeBtn = document.getElementById('dark-mode-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = 'Light Mode';
    } else {
        darkModeBtn.textContent = 'Dark Mode';
    }
}
const darkModeBtn = document.getElementById('dark-mode-toggle');
darkModeBtn.addEventListener('click', toggleDarkMode);
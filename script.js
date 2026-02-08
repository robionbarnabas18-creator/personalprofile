const toggleBtn = document.getElementById('toggleMode');
const body = document.body;
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        icon.className = 'fas fa-sun'; // Change to sun icon for light mode
    } else {
        icon.className = 'fas fa-moon'; // Change to moon icon for dark mode
    }
});

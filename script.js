const toggleBtn = document.getElementById('toggleMode');
const body = document.body;
const icon = toggleBtn.querySelector('i');
const floatingToggle = document.getElementById('floatingToggle');

// Toggle mode siang/malam
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        icon.className = 'fas fa-sun'; // Change to sun icon for light mode
    } else {
        icon.className = 'fas fa-moon'; // Change to moon icon for dark mode
    }
});

// Drag functionality untuk floating toggle
let isDragging = false;
let offsetX, offsetY;

floatingToggle.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - floatingToggle.offsetLeft;
    offsetY = e.clientY - floatingToggle.offsetTop;
    floatingToggle.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        floatingToggle.style.left = (e.clientX - offsetX) + 'px';
        floatingToggle.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    floatingToggle.style.cursor = 'move';
});

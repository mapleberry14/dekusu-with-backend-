// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode was previously enabled
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if it was enabled
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '⏾';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '⏾';
        localStorage.setItem('darkMode', 'true');
    } else {
        darkModeToggle.textContent = '☀';
        localStorage.setItem('darkMode', 'false');
    }
});

// Load user data
window.onload = function() {
    const userEmail = localStorage.getItem('userEmail') || 'admin@adnu.edu.ph';
    document.getElementById('userEmail').textContent = userEmail;
};

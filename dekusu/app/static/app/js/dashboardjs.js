document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    
    // Check each nav link
    document.querySelectorAll('.nav_contents li a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (linkPage === currentPage) {
            // Set active state on parent li
            link.parentElement.classList.add('active');
            
            // Force expanded state for active item
            link.parentElement.style.width = 'fit-content';
            const textSpan = link.querySelector('.nav-text');
            if (textSpan) {
                textSpan.style.display = 'inline';
            }
        }
        
        // Handle hover effects
        link.parentElement.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.width = 'fit-content';
                this.style.backgroundColor = '';
                const textSpan = this.querySelector('.nav-text');
                if (textSpan) {
                    textSpan.style.display = 'inline';
                }
            }
        });
        
        link.parentElement.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.width = '40px';
                const textSpan = this.querySelector('.nav-text');
                if (textSpan) {
                    textSpan.style.display = 'none';
                }
            }
        });
    });
});

// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    const Logo = document.getElementById('Logo');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☾';
        Logo.src = '/Dekusu images/dekusu logo(Dark).png'
        
    } else {
        darkModeToggle.textContent = '☀︎';
        Logo.src = '/Dekusu images/dekusu logo.png'
    }
});

document.getElementById('visitorform').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = document.getElementById('Purpose').value;
    if (form){
        window.location.href = 'Pages/dashboard(guest).html';
    }
});
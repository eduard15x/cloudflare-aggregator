// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');

        // Save preference to localStorage
        localStorage.setItem('activeTab', tabName);
    });
});

// Restore previously active tab on page load
window.addEventListener('load', () => {
    const savedTab = localStorage.getItem('activeTab') || 'sites';
    const savedButton = document.querySelector(`[data-tab="${savedTab}"]`);
    if (savedButton) {
        savedButton.click();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

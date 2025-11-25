document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navAnchors = navLinks.querySelectorAll('a');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-open');
            const isNavOpen = navLinks.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isNavOpen);
        });
    }

    // Close mobile nav when a link is clicked
    navAnchors.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-open')) {
                navLinks.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Handle form submission
    const notifyForm = document.querySelector('.notify-form');
    if (notifyForm) {
        notifyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const button = this.querySelector('button');
            
            if (emailInput.value) {
                // Simulate a successful submission
                button.textContent = 'Thank You!';
                button.style.backgroundColor = '#28a745'; // Green color for success
                emailInput.disabled = true;
                button.disabled = true;

                // You would typically send the email to your server here
                console.log(`Email submitted: ${emailInput.value}`);
            }
        });
    }
});

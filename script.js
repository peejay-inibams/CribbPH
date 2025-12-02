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

    // Smooth scrolling for hero CTA button
    const heroCtaButton = document.querySelector('.hero .cta-button');
    if (heroCtaButton) {
        heroCtaButton.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

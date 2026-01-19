// Initialize Lucide Icons for clean, modern imagery
lucide.createIcons();

/**
 * Scroll Reveal Animation Logic
 * Adds a fade-in and slide-up effect as the recruiter scrolls down.
 */
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once the animation has triggered
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target all major sections and cards for animation
document.querySelectorAll(
    '.section-title, .glass, .glass-deep, .academic-box, .skill-item, .proj-card, .cert-item, .objective-card'
).forEach(el => {
    el.classList.add('reveal-init');
    revealObserver.observe(el);
});

/**
 * Smooth Navigation Logic
 * Ensures the page scrolls smoothly to sections when clicking nav links.
 */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Certificates Carousel
const carousel = document.querySelector('.certificates-grid');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;
const totalCertificates = document.querySelectorAll('.certificate-card').length;

if (carousel && prevBtn && nextBtn) {
    // Update button states
    const updateButtons = () => {
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === totalCertificates - 1 ? '0.5' : '1';
    };

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateButtons();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCertificates - 1) {
            currentIndex++;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateButtons();
        }
    });

    // Initialize button states
    updateButtons();
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections that need animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.skills-section, .education-section, .certificates-section');
    sections.forEach(section => observer.observe(section));
});
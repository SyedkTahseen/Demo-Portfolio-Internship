// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('header');
const navLinksItems = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contactForm');
const heroSubtext = document.querySelector('.hero-content p');

// Mobile Navigation
const toggleMobileMenu = () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
};

// Event Listeners
hamburger.addEventListener('click', toggleMobileMenu);

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log(formData);
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Typing Animation
if (heroSubtext) {
    const originalText = "B.Tech Information Technology Student @ PTU\nAspiring Full-Stack Web Developer passionate about building digital experiences.";
    heroSubtext.innerHTML = '';
    
    let charIndex = 0;
    let lineIndex = 0;
    const lines = originalText.split('\n');
    const typingSpeed = () => Math.random() * 50 + 50;
    
    const typeLine = () => {
        if (lineIndex >= lines.length) return;
        
        if (charIndex < lines[lineIndex].length) {
            const currentLineElement = heroSubtext.children[lineIndex] || document.createElement('span');
            if (!heroSubtext.children[lineIndex]) {
                currentLineElement.className = 'typing-text';
                heroSubtext.appendChild(currentLineElement);
                if (lineIndex > 0) heroSubtext.appendChild(document.createElement('br'));
            }
            currentLineElement.textContent = lines[lineIndex].substring(0, ++charIndex);
            setTimeout(typeLine, typingSpeed());
        } else {
            lineIndex++;
            charIndex = 0;
            if (lineIndex < lines.length) setTimeout(typeLine, 500);
        }
    };
    setTimeout(typeLine, 1000);
}


// Scroll Animation
const fadeElements = document.querySelectorAll('section');
fadeElements.forEach(section => section.classList.add('fade-in'));

const checkScroll = () => {
    const windowHeight = window.innerHeight;
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        element.classList.toggle('visible', elementTop < windowHeight - 100);
    });
};

// Initialize
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
checkScroll();
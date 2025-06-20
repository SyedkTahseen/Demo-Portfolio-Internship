/* DOM Elements */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('header');
const navLinksItems = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contactForm');
const typedTextPart1 = document.querySelector(".typed-text-part1");
const typedTextPart2 = document.querySelector(".typed-text-part2");
const cursorSpan = document.querySelector(".cursor");
const bioTypedText = document.querySelector(".bio-typed-text");
const bioCursor = document.querySelector(".bio-cursor");

/* Mobile Navigation */
const toggleMobileMenu = () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
};

/* Event Listeners */
hamburger.addEventListener('click', toggleMobileMenu);

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* Sticky Header */
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
});

/* Smooth Scrolling */
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

/* Typewriter Effect for Aspiring Text */
const textArray = [
    {part1: "Full-", part2: "Stack Developer"},
    {part1: "Web ", part2: "Developer"},
    {part1: "MERN ", part2: "Stack Developer"},
    {part1: "Frontend ", part2: "Developer"},
    {part1: "Backend ", part2: "Developer"}
];

const typingDelay = 80;
const erasingDelay = 40;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;
let isTypingPart1 = true;

function typeAspiring() {
    const currentText = textArray[textArrayIndex];

    if (isTypingPart1) {
        if (charIndex < currentText.part1.length) {
            typedTextPart1.textContent += currentText.part1.charAt(charIndex);
            charIndex++;
            setTimeout(typeAspiring, typingDelay);
        } else {
            isTypingPart1 = false;
            charIndex = 0;
            setTimeout(typeAspiring, typingDelay);
        }
    } else {
        if (charIndex < currentText.part2.length) {
            typedTextPart2.textContent += currentText.part2.charAt(charIndex);
            charIndex++;
            setTimeout(typeAspiring, typingDelay);
        } else {
            setTimeout(eraseAspiring, newTextDelay);
        }
    }
}

function eraseAspiring() {
    const currentText = textArray[textArrayIndex];

    if (typedTextPart2.textContent.length > 0) {
        typedTextPart2.textContent = typedTextPart2.textContent.slice(0, -1);
        setTimeout(eraseAspiring, erasingDelay);
    } else if (typedTextPart1.textContent.length > 0) {
        typedTextPart1.textContent = typedTextPart1.textContent.slice(0, -1);
        setTimeout(eraseAspiring, erasingDelay);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        charIndex = 0;
        isTypingPart1 = true;
        setTimeout(typeAspiring, typingDelay);
    }
}

/* Typewriter Effect for Bio Text (One-Time) */
const bioText = "B.Tech Information Technology Student @ PTU Aspiring Full-Stack Web Developer passionate about building digital experiences";
let bioCharIndex = 0;

function typeBio() {
    if (bioTypedText && bioCharIndex < bioText.length) {
        bioTypedText.textContent += bioText.charAt(bioCharIndex);
        bioCharIndex++;
        setTimeout(typeBio, 50); // Faster typing for bio text
    } else if (bioCursor) {
        bioCursor.style.display = 'none'; // Hide cursor after typing
    }
}

/* Initialize Typewriter Effects */
document.addEventListener("DOMContentLoaded", function() {
    // Start bio text typing immediately
    if (bioTypedText && bioText.length) {
        setTimeout(typeBio, 500); // Slight delay for page load
    }
    // Start aspiring text typing after bio text or with slight delay
    if (textArray.length) {
        setTimeout(typeAspiring, 1500); // Delay to avoid overlap with bio typing
    }
});

/* Form Submission */
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
/* For Form Submission */
// JavaScript to handle form submission
    document.getElementById('contactForm').addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      // Google Apps Script endpoint
      const url = 'https://script.google.com/macros/s/AKfycbzRYnkijR3cM7mhhIRayTkKecm0vuqmTZ3vTdTsRf7tLpBsvp4HfxYWgUFfbIB3RJ37eg/exec';

      try {
        // Send POST request to Google Apps Script
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
          mode: 'no-cors' // Required for Google Apps Script endpoints
        });

        // Since 'no-cors' mode limits response access, assume success if no error
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset(); // Clear the form
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again.');
      }
    });

/* Scroll Animation */
const fadeElements = document.querySelectorAll('section');
fadeElements.forEach(section => section.classList.add('fade-in'));

const checkScroll = () => {
    const windowHeight = window.innerHeight;
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        element.classList.toggle('visible', elementTop < windowHeight - 100);
    });
};

/* Initialize */
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
checkScroll();
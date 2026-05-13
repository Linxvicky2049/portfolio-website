// ====================================
// SMOOTH SCROLLING & NAVIGATION
// ====================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ====================================
// CONTACT FORM HANDLING
// ====================================

const contactModal = document.getElementById('contactModal');

function openContactForm() {
    contactModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeContactForm() {
    contactModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        closeContactForm();
    }
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:victor4all2015@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\\n\\n${message}`)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    document.getElementById('contactForm').reset();
    
    // Close modal
    setTimeout(() => {
        closeContactForm();
    }, 1000);
});

// ====================================
// ANIMATION TRIGGERS
// ====================================

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe elements with animation
document.querySelectorAll('.skill-item, .hobby-card, .contact-card, .social-link').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add fade-in-up animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ====================================
// PARTICLE EFFECT (Optional Enhancement)
// ====================================

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(0, 255, 136, 0.8)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    particle.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.8)';

    document.body.appendChild(particle);

    const velocity = {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8
    };

    let life = 1;
    const animate = () => {
        life -= 0.05;
        if (life <= 0) {
            particle.remove();
            return;
        }

        x += velocity.x;
        y += velocity.y;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = life;
        particle.style.transform = `scale(${life})`;

        requestAnimationFrame(animate);
    };

    animate();
}

// Create particles on click
document.addEventListener('click', (e) => {
    // Only create particles on buttons and links
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        for (let i = 0; i < 6; i++) {
            createParticle(e.clientX, e.clientY);
        }
    }
});

// ====================================
// GLITCH EFFECT ON HOVER (Optional)
// ====================================

function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.name-title');
    
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease infinite';
        });
        el.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
}

const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(glitchStyle);

addGlitchEffect();

// ====================================
// KEYBOARD NAVIGATION
// ====================================

let currentSection = 0;
const sections = ['home', 'about', 'skills', 'contact'];

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        currentSection = (currentSection + 1) % sections.length;
        scrollToSection(sections[currentSection]);
    } else if (e.key === 'ArrowUp') {
        currentSection = (currentSection - 1 + sections.length) % sections.length;
        scrollToSection(sections[currentSection]);
    }
});

// ====================================
// PERFORMANCE OPTIMIZATION
// ====================================

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ====================================
// INITIALIZE ON PAGE LOAD
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    console.log('Welcome to OKAFOR VICTOR SOMTO\'s portfolio');
    
    // Animate profile card on load
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            profileCard.style.transition = 'all 0.8s ease';
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ====================================
// CURSOR EFFECT (ADVANCED)
// ====================================

const cursor = document.createElement('div');
cursor.style.position = 'fixed';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.border = '2px solid rgba(0, 255, 136, 0.5)';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '10000';
cursor.style.transition = 'all 0.1s ease';
cursor.style.display = 'none';

document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.style.position = 'fixed';
cursorDot.style.width = '4px';
cursorDot.style.height = '4px';
cursorDot.style.background = 'rgba(0, 255, 136, 0.8)';
cursorDot.style.borderRadius = '50%';
cursorDot.style.pointerEvents = 'none';
cursorDot.style.zIndex = '10001';
cursorDot.style.transition = 'all 0.1s ease';
cursorDot.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.8)';
cursorDot.style.display = 'none';

document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursorDot.style.left = e.clientX - 2 + 'px';
    cursorDot.style.top = e.clientY - 2 + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
});

// Change cursor color on hover of interactive elements
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.classList.contains('skill-tag')) {
        cursor.style.borderColor = 'rgba(255, 215, 0, 0.8)';
        cursorDot.style.background = 'rgba(255, 215, 0, 0.8)';
        cursorDot.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.8)';
    } else {
        cursor.style.borderColor = 'rgba(0, 255, 136, 0.5)';
        cursorDot.style.background = 'rgba(0, 255, 136, 0.8)';
        cursorDot.style.boxShadow = '0 0 10px rgba(0, 255, 136, 0.8)';
    }
});
// Smooth scrolling and navigation
const sections = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Navigation functionality
        const navbar = document.querySelector('.navbar');
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const backToTop = document.getElementById('backToTop');
        const typingText = document.querySelector('.typing-text');

        // Ensure all required elements are present
        if (!navbar || !hamburger || !navMenu || !navLinks.length) {
            console.error('Required navigation elements not found');
            return;
        }

        // Mobile menu toggle
        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                backToTop?.classList.add('visible');
            } else {
                navbar.classList.remove('scrolled');
                backToTop?.classList.remove('visible');
            }
        });

        // Back to top functionality
        backToTop?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Active navigation link
        if (sections.length > 0) {
            const observerOptions = {
                threshold: 0.3,
                rootMargin: '-100px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${id}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        }

        // Typing animation
        if (typingText) {
            const titles = [
                'Software QA Engineer',
                'Manual Testing Expert',
                'Automation Specialist',
                'API Testing Professional',
                'Performance Testing Expert',
                'Security Testing Analyst'
            ];
            
            let titleIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeWriter() {
                const currentTitle = titles[titleIndex];
                
                if (isDeleting) {
                    typingText.textContent = currentTitle.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingText.textContent = currentTitle.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = isDeleting ? 50 : 100;

                if (!isDeleting && charIndex === currentTitle.length) {
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    titleIndex = (titleIndex + 1) % titles.length;
                }

                setTimeout(typeWriter, typeSpeed);
            }

            // Start the typing animation
            typeWriter();
        }
    } catch (error) {
        console.error('Error initializing portfolio scripts:', error);
    }

    // Counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.counter, .stat-number');
        
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (target % 1 === 0) {
                        counter.textContent = Math.ceil(current);
                    } else {
                        counter.textContent = current.toFixed(1);
                    }
                    setTimeout(updateCounter, 20);
                } else {
                    if (target % 1 === 0) {
                        counter.textContent = target;
                    } else {
                        counter.textContent = target.toFixed(1);
                    }
                }
            };
            
            updateCounter();
        });
    }

    // Skill bars animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }

    // AOS (Animate On Scroll) implementation
    function initAOS() {
        const elements = document.querySelectorAll('[data-aos]');
        
        const aosObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-aos-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, delay);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => {
            aosObserver.observe(element);
        });
    }

    // Initialize AOS
    initAOS();

    // Trigger animations when sections come into view
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('about') || 
                    entry.target.classList.contains('hero')) {
                    animateCounters();
                }
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => {
        animationObserver.observe(section);
    });

    // Form handling
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        });
    }

    // Notification system
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }

    // Parallax effect for floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.achievement-card, .project-card, .timeline-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Smooth reveal animation for elements
    const revealElements = document.querySelectorAll('.timeline-card, .project-card, .achievement-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(element);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Copy to clipboard functionality for contact info
    const contactItems = document.querySelectorAll('.contact-details p, .contact-details a');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification('Copied to clipboard!', 'success');
                });
            }
        });
        
        // Add cursor pointer
        item.style.cursor = 'pointer';
        item.title = 'Click to copy';
    });

    // Animated Counters for stats and achievements (trigger on scroll)
    function animateCounter(element, target, duration = 2000, isFloat = false) {
        let start = 0;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            let value = isFloat
                ? (progress * (target - start) + start).toFixed(1)
                : Math.floor(progress * (target - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = isFloat ? target.toFixed(1) : target;
            }
        };
        window.requestAnimationFrame(step);
    }

    function setupCounterAnimation(selector) {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    const el = entry.target;
                    const target = parseFloat(el.getAttribute('data-target'));
                    const isFloat = el.getAttribute('data-target').includes('.') || el.textContent.includes('%');
                    animateCounter(el, target, 2000, isFloat);
                    el.dataset.animated = 'true';
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        elements.forEach(el => observer.observe(el));
    }

    // Animate .stat-number and .counter when visible
    setupCounterAnimation('.stat-number');
    setupCounterAnimation('.counter');
});
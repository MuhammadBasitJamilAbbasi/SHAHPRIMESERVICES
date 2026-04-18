document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            const spans = mobileToggle.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    const slides = document.querySelectorAll('.slide');
    const navDots = document.querySelectorAll('.nav-dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            navDots[i]?.classList.remove('active');
        });
        
        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        navDots[currentSlide]?.classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    if (slides.length > 0) {
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(index);
                startAutoSlide();
            });
        });

        prevBtn?.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        nextBtn?.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        startAutoSlide();
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated || statNumbers.length === 0) return;
        
        const statsSection = document.querySelector('.stats');
        if (!statsSection) return;
        
        const rect = statsSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight - 100) {
            statsAnimated = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCount = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.floor(current) + '+';
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target + '+';
                    }
                };
                
                updateCount();
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats();

    const revealElements = document.querySelectorAll('.feature-card, .service-card, .step-card, .testimonial-card, .area-card, .intro-content, .section-header, .about-content, .contact-container, .intro-image, .why-us-content, .why-us-image, .trust-badges, .intro-stats');
    
    function reveal() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    formMessage.className = 'form-message success';
                    formMessage.textContent = 'Thank you! We will contact you soon.';
                    contactForm.reset();
                } else {
                    throw new Error(result.error || 'Failed to send message');
                }
            } catch (error) {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Error sending message. Please try again.';
                console.error('Form submission error:', error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }
});
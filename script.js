document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileMenuFooter = document.querySelector('.mobile-menu-footer');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            
            if (isOpen) {
                // Close menu
                mobileMenu.classList.remove('open');
                iconMenu.style.display = 'block';
                iconClose.style.display = 'none';
                document.body.style.overflow = '';
            } else {
                // Open menu
                mobileMenu.classList.add('open');
                iconMenu.style.display = 'none';
                iconClose.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });

        // Close menu when clicking a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                iconMenu.style.display = 'block';
                iconClose.style.display = 'none';
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking CTA in mobile menu
        if (mobileMenuFooter) {
            const mobileCta = mobileMenuFooter.querySelector('a');
            if (mobileCta) {
                mobileCta.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    iconMenu.style.display = 'block';
                    iconClose.style.display = 'none';
                    document.body.style.overflow = '';
                });
            }
        }
    }

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-scale, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Testimonial Slider Logic
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dots = document.querySelectorAll('.dot');
    const sliderContainer = document.querySelector('.testimonials-slider-container');

    if (track && slides.length > 0) {
        let currentSlide = 0;
        const slideCount = slides.length;
        let autoPlayInterval;

        function updateSlider() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSlider();
        }

        function startAutoPlay() {
            stopAutoPlay(); // Clear existing interval if any
            autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }

        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
            }
        }

        // Event Listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                startAutoPlay(); // Reset timer on interaction
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                startAutoPlay(); // Reset timer on interaction
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
                startAutoPlay(); // Reset timer on interaction
            });
        });

        // Pause on hover
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopAutoPlay);
            sliderContainer.addEventListener('mouseleave', startAutoPlay);
        }

        // Initialize
        startAutoPlay();
    }
});

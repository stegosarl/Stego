/**
 * Real Estate Project - Main JavaScript
 * Handles animations, interactions, and dynamic content
 */

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initGallerySlider();
    initCounters();
    initParallax();
    initContactForm();
    initSmoothScroll();
});

// ==================== Navigation ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

// ==================== Smooth Scroll ====================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== Scroll Animations ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;

                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);

                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// ==================== Gallery Slider ====================
function initGallerySlider() {
    const gallerySwiper = new Swiper('.gallerySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        effect: 'slide',
        speed: 800,
    });
}

// ==================== Animated Counters ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const counterSpeed = 2000; // Animation duration in milliseconds

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = counterSpeed;
                const increment = target / (duration / 16); // 60 FPS

                let current = 0;

                const updateCounter = () => {
                    current += increment;

                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();

                // Animate progress bars
                const progressBar = counter.closest('.stat-card').querySelector('.stat-progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                }

                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ==================== Parallax Effect ====================
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax-speed') || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

// ==================== Contact Form ====================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Validate form
        if (!validateForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');

            // Reset form
            contactForm.reset();

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Form validation
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name || data.name.trim().length < 2) {
        showNotification('Please enter a valid name.', 'error');
        return false;
    }

    if (!data.email || !emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }

    if (!data.message || data.message.trim().length < 10) {
        showNotification('Please enter a message (at least 10 characters).', 'error');
        return false;
    }

    return true;
}

// ==================== Notification System ====================
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '20px 30px',
        backgroundColor: type === 'success' ? '#ffc621' : type === 'error' ? '#dc3545' : '#ffc621',
        color: '#121212',
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '14px',
        fontWeight: '500',
        maxWidth: '400px',
        animation: 'slideInRight 0.4s ease',
        cursor: 'pointer'
    });

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 5000);

    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    });
}

// ==================== Image Lazy Loading ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== Utility Functions ====================

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==================== Newsletter Form ====================
document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        if (!email || !email.includes('@')) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        showNotification('Thank you for subscribing to our newsletter!', 'success');
        this.reset();
    });
});

// ==================== Dynamic Image Gallery System ====================
/**
 * This section provides easy methods to update gallery images dynamically
 * Usage example:
 *
 * updateGalleryImages([
 *     { src: 'path/to/image1.jpg', title: 'Title 1', description: 'Description 1' },
 *     { src: 'path/to/image2.jpg', title: 'Title 2', description: 'Description 2' }
 * ]);
 */

function updateGalleryImages(images) {
    const swiperWrapper = document.querySelector('.gallerySwiper .swiper-wrapper');

    if (!swiperWrapper) {
        console.error('Gallery swiper wrapper not found');
        return;
    }

    // Clear existing slides
    swiperWrapper.innerHTML = '';

    // Add new slides
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="gallery-item">
                <img src="${image.src}" alt="${image.title || 'Gallery Image ' + (index + 1)}">
                <div class="gallery-overlay">
                    <h3>${image.title || 'Gallery Image ' + (index + 1)}</h3>
                    <p>${image.description || ''}</p>
                </div>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });

    // Update Swiper
    const gallerySwiper = document.querySelector('.gallerySwiper').swiper;
    if (gallerySwiper) {
        gallerySwiper.update();
    }
}

// Function to update activity images
function updateActivityImages(activities) {
    activities.forEach((activity, index) => {
        const activityItem = document.querySelectorAll('.activity-item')[index];
        if (activityItem) {
            const img = activityItem.querySelector('.activity-image img');
            const title = activityItem.querySelector('.activity-content h3');
            const description = activityItem.querySelector('.activity-content p');

            if (img) img.src = activity.image;
            if (title) title.textContent = activity.title;
            if (description) description.textContent = activity.description;
        }
    });
}

// Function to update about/vision images
function updateSectionImage(sectionId, imagePath) {
    const section = document.getElementById(sectionId);
    if (section) {
        const img = section.querySelector('.image-wrapper img');
        if (img) {
            img.src = imagePath;
        }
    }
}

// Export functions for external use
window.RealEstateProject = {
    updateGalleryImages,
    updateActivityImages,
    updateSectionImage,
    showNotification
};

// ==================== Performance Monitoring ====================
window.addEventListener('load', () => {
    // Log page load time
    const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});

// ==================== Accessibility Enhancements ====================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');

        if (navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Add focus styles for better keyboard navigation
const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #921914';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
    });
});

/**
 * Family Court Mediation Services - Enhanced JavaScript
 * Professional design with improved functionality and visual effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initializePage();
    initializeForm();
    initializeAnimations();
    createEnhancedParticles();
    initializeToasts();
    initializeCursorEffect();
    init3DTiltEffect();
    enhanceAccessibility();
    initTypingEffect();
    initializeServiceItems();
    initBioModal();
});

/**
 * Initialize page elements and utilities
 */
function initializePage() {
    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Check for SVG support and provide fallback if needed
    checkSvgSupport();
    
    // Check for WebP support
    checkWebPSupport();

    // Check for backdrop-filter support
    checkBackdropFilterSupport();
    
    // Initialize scrolling effects
    initializeScrollEffects();
}

/**
 * SVG support detection and fallback
 */
function checkSvgSupport() {
    const svgSupported = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
    if (!svgSupported) {
        const logo = document.querySelector('.logo');
        const fallback = document.querySelector('.logo-fallback');
        
        if (logo && fallback) {
            logo.style.display = 'none';
            fallback.style.display = 'block';
        }
        document.documentElement.classList.add('no-svg');
    }
}

/**
 * WebP support detection
 */
function checkWebPSupport() {
    const webpTest = new Image();
    webpTest.onload = function() { 
        document.documentElement.classList.add('webp'); 
    };
    webpTest.onerror = function() { 
        document.documentElement.classList.add('no-webp'); 
    };
    webpTest.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
}

/**
 * Backdrop-filter support detection
 */
function checkBackdropFilterSupport() {
    const supportCheck = CSS.supports('(backdrop-filter: blur(1px))') || 
                        CSS.supports('(-webkit-backdrop-filter: blur(1px))');
                        
    if (!supportCheck) {
        document.documentElement.classList.add('no-backdrop-filter');
    }
}

/**
 * Initialize scroll-based effects
 */
function initializeScrollEffects() {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        
        // Add shadow and opacity to header on scroll
        if (header) {
            if (scrollPosition > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once at initialization
    handleScroll();
}

/**
 * Create enhanced floating particles in the background
 */
function createEnhancedParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create random particles with improved visuals
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning and properties
        const randomX = Math.floor(Math.random() * 100);
        const randomY = Math.floor(Math.random() * 100);
        const randomSize = Math.floor(Math.random() * 6) + 2;
        const randomDuration = Math.floor(Math.random() * 15) + 15;
        const randomDelay = Math.floor(Math.random() * 10);
        const randomOpacity = (Math.random() * 0.5 + 0.1).toFixed(2);
        
        particle.style.left = `${randomX}%`;
        particle.style.bottom = `-${randomSize}px`;
        particle.style.width = `${randomSize}px`;
        particle.style.height = `${randomSize}px`;
        particle.style.opacity = randomOpacity;
        particle.style.animationDuration = `${randomDuration}s`;
        particle.style.animationDelay = `${randomDelay}s`;
        
        // Add unique blur to some particles
        if (Math.random() > 0.5) {
            const blurAmount = Math.floor(Math.random() * 3) + 1;
            particle.style.filter = `blur(${blurAmount}px)`;
        }
        
        container.appendChild(particle);
    }
}

/**
 * Initialize service item interactions
 */
function initializeServiceItems() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('i');
            if (icon) {
                icon.classList.add('animated');
                setTimeout(() => {
                    icon.classList.remove('animated');
                }, 500);
            }
        });
    });
}

/**
 * Initialize cursor glow effect with improved performance
 */
function initializeCursorEffect() {
    // Only add effect if not on mobile and if reduced motion is not preferred
    if (window.matchMedia('(min-width: 768px)').matches && 
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        
        // Get cursor follower element
        const cursorGlow = document.querySelector('.cursor-glow');
        if (!cursorGlow) return;
        
        // Track mouse movement with throttling for better performance
        let lastMove = 0;
        let rafId = null;
        
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastMove < 20) return; // Throttle to improve performance
            lastMove = now;
            
            // Use requestAnimationFrame for smoother updates
            if (rafId) cancelAnimationFrame(rafId);
            
            rafId = requestAnimationFrame(() => {
                // Update position
                cursorGlow.style.transform = `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`;
                cursorGlow.style.opacity = '0.2';
                
                // Add extra glow near interactive elements
                const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
                if (hoveredElement && (
                    hoveredElement.tagName === 'BUTTON' || 
                    hoveredElement.tagName === 'INPUT' || 
                    hoveredElement.tagName === 'TEXTAREA' ||
                    hoveredElement.classList.contains('glass-panel') ||
                    hoveredElement.classList.contains('service-item')
                )) {
                    cursorGlow.style.opacity = '0.4';
                }
            });
        });
        
        // Hide when mouse leaves window
        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });
    }
}

/**
 * Initialize page animations and visual effects with enhanced professionalism
 */
function initializeAnimations() {
    // Professional scroll reveal animation for elements as they enter viewport
    const revealElements = document.querySelectorAll('.glass-panel, .service-item, .footer-content > *');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        revealElements.forEach(el => {
            el.classList.add('reveal-element');
            revealObserver.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        revealElements.forEach(el => el.classList.add('revealed'));
    }
    
    // Enhanced background parallax effect
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const bgPattern = document.querySelector('.bg-pattern');
        
        if (bgPattern) {
            window.addEventListener('mousemove', (e) => {
                // Use requestAnimationFrame for smoother updates
                requestAnimationFrame(() => {
                    const mouseX = e.clientX / window.innerWidth;
                    const mouseY = e.clientY / window.innerHeight;
                    
                    const offsetX = 15 * (mouseX - 0.5);
                    const offsetY = 15 * (mouseY - 0.5);
                    
                    bgPattern.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.05)`;
                });
            });
        }
    }
}

/**
 * Initialize 3D tilt effect for glass panels with enhanced professionalism
 */
function init3DTiltEffect() {
    // Check if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    const panels = document.querySelectorAll('.tilt-effect');
    
    panels.forEach(panel => {
        panel.addEventListener('mouseenter', handleMouseEnter);
        panel.addEventListener('mousemove', handleMouseMove);
        panel.addEventListener('mouseleave', handleMouseLeave);
    });
    
    function handleMouseEnter(e) {
        this.style.transition = 'transform 0.1s ease-out';
    }
    
    function handleMouseMove(e) {
        // Use requestAnimationFrame for smoother updates
        requestAnimationFrame(() => {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Reduce tilt amount for more professional look
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            this.style.transform = `perspective(1000px) rotateX(${deltaY * -2.5}deg) rotateY(${deltaX * 2.5}deg) translateZ(5px)`;
        });
    }
    
    function handleMouseLeave() {
        this.style.transition = 'transform 0.5s ease-out';
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    }
}

/**
 * Initialize professional typing effect for form placeholders
 */
function initTypingEffect() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        const originalPlaceholder = input.getAttribute('placeholder');
        if (!originalPlaceholder) return;
        
        input.setAttribute('data-placeholder', originalPlaceholder);
        input.setAttribute('placeholder', '');
        
        input.addEventListener('focus', () => {
            input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.setAttribute('placeholder', '');
                setTimeout(() => {
                    typeOutPlaceholder(input, input.getAttribute('data-placeholder'));
                }, 500);
            }
        });
        
        // Type out placeholders initially with staggered timing
        setTimeout(() => {
            typeOutPlaceholder(input, originalPlaceholder);
        }, Array.from(inputs).indexOf(input) * 150 + 1500);
    });
    
    function typeOutPlaceholder(element, text) {
        if (!text) return;
        
        let i = 0;
        const typing = setInterval(() => {
            if (i <= text.length) {
                element.setAttribute('placeholder', text.substring(0, i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 30);
    }
}

/**
 * Initialize toast notifications
 */
function initializeToasts() {
    // Create a toast container if it doesn't exist
    if (!document.querySelector('.toast-container')) {
        const toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
        
        // Create a single toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toastContainer.appendChild(toast);
    }
}

/**
 * Initialize form validation and submission with professional feedback
 */
function initializeForm() {
    // Form elements
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');
    const statusMessage = document.getElementById('status-message');
    const charCount = document.getElementById('char-count');
    const charCounter = document.getElementById('character-counter');
    
    // Validation messages
    const firstNameValidation = document.getElementById('firstName-validation');
    const lastNameValidation = document.getElementById('lastName-validation');
    const emailValidation = document.getElementById('email-validation');

    // Professional validation messages
    const errorMessages = {
        required: 'This field is required',
        email: 'Please enter a valid email address',
        maxlength: 'You have exceeded the maximum length'
    };
    
    // Add visual feedback on input focus
    [firstNameInput, lastNameInput, emailInput, phoneInput, messageInput].forEach(input => {
        if (!input) return;
        
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('input-focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('input-focused');
        });
    });

    /**
     * Email validation with HTML5 pattern and regex fallback
     * @param {string} email - Email address to validate
     * @returns {boolean} - Whether email is valid
     */
    const isValidEmail = (email) => {
        // Create a temporary input to leverage HTML5 validation
        const tempInput = document.createElement('input');
        tempInput.type = 'email';
        tempInput.value = email;
        
        // Use HTML5 validation if available
        if (typeof tempInput.checkValidity === 'function') {
            return tempInput.checkValidity();
        }
        
        // Fallback regex validation
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email);
    };
    
    /**
     * Debounce function to limit how often a function can be called
     * @param {Function} func - Function to debounce
     * @param {number} wait - Time to wait in ms
     * @returns {Function} - Debounced function
     */
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    /**
     * Shows status message with optional auto-hide and professional styling
     * @param {string} message - Message to display
     * @param {boolean} isError - Whether it's an error message
     * @param {boolean} autoHide - Whether to auto-hide the message
     */
    const showMessage = (message, isError = false, autoHide = true) => {
        if (!statusMessage) return;
        
        statusMessage.textContent = message;
        statusMessage.className = isError ? 'error' : 'success';
        statusMessage.style.display = 'block';
        
        // Add transition effect
        setTimeout(() => {
            statusMessage.classList.add('show');
        }, 10);

        if (autoHide) {
            setTimeout(() => {
                statusMessage.classList.remove('show');
                setTimeout(() => {
                    statusMessage.style.display = 'none';
                }, 300);
            }, 5000); // Hide after 5 seconds
        }
    };

    /**
     * Validate a single form field and show appropriate message
     * @param {HTMLElement} input - Input element to validate
     * @param {HTMLElement} validationElement - Element to show validation message
     * @returns {boolean} - Whether field is valid
     */
    const validateField = (input, validationElement) => {
        if (!input) return true;
        
        let isValid = true;
        
        // Hide previous validation messages
        if (validationElement) {
            validationElement.classList.remove('show');
        }
        
        // Required field validation
        if (input.hasAttribute('required') && !input.value.trim()) {
            if (validationElement) {
                validationElement.textContent = errorMessages.required;
                validationElement.classList.add('show');
            }
            isValid = false;
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim() && !isValidEmail(input.value.trim())) {
            if (validationElement) {
                validationElement.textContent = errorMessages.email;
                validationElement.classList.add('show');
            }
            isValid = false;
        }
        
        return isValid;
    };

    /**
     * Handle form submission with validation and API call
     * @param {Event} e - Submit event
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset previous status
        if (statusMessage) {
            statusMessage.style.display = 'none';
        }
        
        // Validate all fields
        const isFirstNameValid = validateField(firstNameInput, firstNameValidation);
        const isLastNameValid = validateField(lastNameInput, lastNameValidation);
        const isEmailValid = validateField(emailInput, emailValidation);
        
        // If any field is invalid, stop submission
        if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
            return;
        }
        
        // Show loading state
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.classList.add('loading');
        }
        
        // Add form submission animation
        form.classList.add('submitting');
        
        // Get form data
        const formData = {
            firstName: firstNameInput ? firstNameInput.value.trim() : '',
            lastName: lastNameInput ? lastNameInput.value.trim() : '',
            email: emailInput ? emailInput.value.trim() : '',
            phone: phoneInput ? phoneInput.value.trim() : '',
            message: messageInput ? messageInput.value.trim() : ''
        };

        try {
            // Simulate network delay (remove in production)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Uncomment for actual API call
            /*
            const response = await fetch('https://api.example.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            
            const data = await response.json();
            */
            
            // Success - show message and reset form
            showMessage('Thank you for reaching out! Our mediation team will get back to you shortly.');
            form.reset();
            if (charCount) charCount.textContent = '0';
            if (charCounter) charCounter.className = 'character-count';
            
            // Show success animation
            const formPanel = document.querySelector('.form-panel');
            if (formPanel) {
                formPanel.classList.add('success-animation');
                setTimeout(() => {
                    formPanel.classList.remove('success-animation');
                }, 2000);
            }
            
            // Show confirmation toast
            showToast('Your message has been sent successfully!');
            
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('Sorry, something went wrong. Please try again later.', true);
        } finally {
            // Reset button state
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.classList.remove('loading');
            }
            form.classList.remove('submitting');
        }
    };

    /**
     * Display a custom toast message
     * @param {string} message - Message to display in toast
     */
    function showToast(message) {
        const toast = document.querySelector('.toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // Message character counter with debounced updates
    if (messageInput && charCount) {
        messageInput.addEventListener('input', debounce(() => {
            const count = messageInput.value.length;
            const maxLength = messageInput.getAttribute('maxlength') || 1000;
            charCount.textContent = count;
            
            // Update counter color based on length
            if (count > maxLength * 0.9) {
                charCounter.className = 'character-count danger';
            } else if (count > maxLength * 0.7) {
                charCounter.className = 'character-count warning';
            } else {
                charCounter.className = 'character-count';
            }
            
            // Auto-resize textarea (if needed)
            messageInput.style.height = 'auto';
            messageInput.style.height = Math.min(messageInput.scrollHeight, 300) + 'px';
        }, 100));
    }

    // Add validation on blur for required fields
    [firstNameInput, lastNameInput, emailInput].forEach(input => {
        if (!input) return;
        
        let validationElement;
        
        if (input === firstNameInput) validationElement = firstNameValidation;
        if (input === lastNameInput) validationElement = lastNameValidation;
        if (input === emailInput) validationElement = emailValidation;
        
        input.addEventListener('blur', () => validateField(input, validationElement));
        
        // Clear validation message on input
        input.addEventListener('input', () => {
            if (validationElement) {
                validationElement.classList.remove('show');
            }
        });
    });

    // Form submission event
    form.addEventListener('submit', handleSubmit);
}

/**
 * Initialize form accessibility features
 */
function enhanceAccessibility() {
    // Focus outline only when using keyboard
    document.body.addEventListener('mousedown', () => {
        document.body.classList.add('using-mouse');
    });
    
    document.body.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.remove('using-mouse');
        }
    });
    
    // Announce form errors to screen readers
    const statusMessage = document.getElementById('status-message');
    if (statusMessage) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && 
                    mutation.attributeName === 'class' && 
                    statusMessage.classList.contains('error')) {
                    // Screen reader will announce this
                    statusMessage.setAttribute('role', 'alert');
                }
            });
        });
        
        observer.observe(statusMessage, { attributes: true });
    }
    
    // Add keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('button, input, textarea, .service-item');
    interactiveElements.forEach(el => {
        el.addEventListener('keydown', (e) => {
            // Add focus effect on enter or space
            if (e.key === 'Enter' || e.key === ' ') {
                el.classList.add('keyboard-focus');
                
                // Trigger click for service items on Enter key
                if (el.classList.contains('service-item') && e.key === 'Enter') {
                    const icon = el.querySelector('i');
                    if (icon) {
                        icon.classList.add('animated');
                        setTimeout(() => {
                            icon.classList.remove('animated');
                        }, 500);
                    }
                }
            }
        });
        
        el.addEventListener('keyup', () => {
            el.classList.remove('keyboard-focus');
        });
    });
}

/**
 * Initialize bio modal functionality
 */
function initBioModal() {
    const modal = document.getElementById('bio-modal');
    const btn = document.getElementById('view-full-bio');
    const closeBtn = document.querySelector('.modal-close');
    
    if (!modal || !btn || !closeBtn) return;
    
    // Open modal
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close modal with X button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}
/**
 * Termux Master - Landing Page JavaScript
 * Funcionalidad: Navegación, tabs, acordión, copy buttons, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTabs();
    initFAQ();
    initCopyButtons();
    initScrollEffects();
    initTypedText();
    initToTop();
});

/**
 * Navegación responsive con toggle (slide from side)
 */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Cerrar menú al hacer click en un enlace
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Dropdown "Más" toggle
    const moreBtn = document.querySelector('.nav-more-btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            moreBtn.closest('.nav-more').classList.toggle('open');
        });
        // Cerrar dropdown al click fuera
        document.addEventListener('click', () => {
            const moreEl = document.querySelector('.nav-more');
            if (moreEl) moreEl.classList.remove('open');
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        }

        lastScroll = currentScroll;
    });
}

/**
 * Sistema de tabs
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Remover active de todos los buttons y contents
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Añadir active al button clickeado
            btn.classList.add('active');
            
            // Mostrar el content correspondiente
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Si no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Botones de copiar código
 */
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const codeBlock = btn.parentElement.querySelector('code');
            const textToCopy = codeBlock.textContent;
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Feedback visual
                const originalText = btn.textContent;
                btn.textContent = '✓';
                btn.style.background = 'var(--accent-green)';
                btn.style.color = 'var(--bg-primary)';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                }, 2000);
                
            } catch (err) {
                console.error('Error al copiar:', err);
                
                // Fallback para navegadores antiguos
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    
                    const originalText = btn.textContent;
                    btn.textContent = '✓';
                    btn.style.background = 'var(--accent-green)';
                    btn.style.color = 'var(--bg-primary)';
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.background = '';
                        btn.style.color = '';
                    }, 2000);
                    
                } catch (e) {
                    console.error('Fallback copy failed:', e);
                }
                
                document.body.removeChild(textArea);
            }
        });
    });
}

/**
 * Efectos de scroll
 */
function initScrollEffects() {
    // Scroll reveal para secciones
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Texto tipeado animado
 */
function initTypedText() {
    const typedTextElement = document.querySelector('.typed-text');
    
    if (!typedTextElement) return;
    
    const phrases = [
        'Tu Linux en el bolsillo',
        'Desarrollo móvil',
        'Servidores en Android',
        'Pentesting desde el móvil',
        'Aprende Linux donde sea',
        'Automatización sin límites'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Iniciar animación
    type();
}

/**
 * Botón To Top (solo aparece al hacer scroll)
 */
function initToTop() {
    const toTopBtn = document.querySelector('.to-top');
    const refreshBtn = document.querySelector('.refresh-btn');

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            if (toTopBtn) toTopBtn.classList.add('visible');
            if (refreshBtn) refreshBtn.classList.add('visible');
        } else {
            if (toTopBtn) toTopBtn.classList.remove('visible');
            if (refreshBtn) refreshBtn.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleVisibility);

    if (toTopBtn) {
        toTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            window.location.reload(true);
        });
    }
}

/**
 * Utilidad: Debounce para eventos de scroll
 */
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 * Utilidad: throttle para eventos de resize
 */
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

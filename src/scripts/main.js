
// =====================================================
// Mobile Menu Toggle
// =====================================================
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close menu when clicking menu items
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
    });
  });
}

// =====================================================
// Header Scroll Effect
// =====================================================
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.style.padding = '10px 0';
    header.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    header.style.padding = '15px 0';
    header.style.background = 'rgba(0, 0, 0, 0.9)';
  }
  
  lastScrollTop = scrollTop;
});

// =====================================================
// Fade-in animations on scroll
// =====================================================
const fadeElements = document.querySelectorAll('.section-header, .service-card, .testimonial');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < triggerBottom) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    } else {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
    }
  });
};

// Initialize the elements
document.addEventListener('DOMContentLoaded', () => {
  fadeElements.forEach(element => {
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
  });
  
  fadeInOnScroll();
});

window.addEventListener('scroll', fadeInOnScroll);

// =====================================================
// Testimonial Slider
// =====================================================
const testimonials = document.querySelectorAll('.testimonial-container');
const prevButton = document.querySelector('.control.prev');
const nextButton = document.querySelector('.control.next');
let currentIndex = 0;

// Function to update slider position
function updateSlider() {
  const slider = document.querySelector('.testimonial-slider');
  if(!slider) return;
  
  // For mobile view, we use a different approach
  if (window.innerWidth <= 768) {
    testimonials.forEach((testimonial, index) => {
      if(index === currentIndex) {
        testimonial.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    });
    return;
  }
  
  // For desktop we use transform
  const slideWidth = testimonials[0].offsetWidth + 30; // Width + gap
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Initialize the slider
if (prevButton && nextButton && testimonials.length > 0) {
  // Set initial state
  updateSlider();
  
  // Add event listeners for controls
  prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, testimonials.length - 1);
    updateSlider();
  });
  
  // Adjust on window resize
  window.addEventListener('resize', updateSlider);
}

// =====================================================
// Contact Form Submission (Mock functionality)
// =====================================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form (simple validation)
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    // Mock form submission
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
      alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso.`);
      contactForm.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1500);
  });
}

// =====================================================
// Smooth scrolling for anchor links
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    
    // Offset for fixed header
    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

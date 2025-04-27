
// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Testimonial Slider
  const testimonialSlider = document.querySelector('.testimonial-slider');
  const prevButton = document.querySelector('.control.prev');
  const nextButton = document.querySelector('.control.next');
  
  if (testimonialSlider && prevButton && nextButton) {
    let scrollAmount = 0;
    const slideWidth = 400; // Aproximadamente a largura de um slide
    
    prevButton.addEventListener('click', function() {
      scrollAmount = Math.max(scrollAmount - slideWidth, 0);
      testimonialSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    
    nextButton.addEventListener('click', function() {
      scrollAmount = Math.min(scrollAmount + slideWidth, testimonialSlider.scrollWidth - testimonialSlider.clientWidth);
      testimonialSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  }

  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Aqui você pode implementar o envio do formulário para um serviço de email
      console.log('Form submitted:', { name, email, message });
      
      // Feedback para o usuário
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      
      // Reset form
      contactForm.reset();
    });
  }

  // Animações ao scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.section-header, .service-card, .testimonial, .about-content, .contact-content');
    
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.9;
      
      if (position < screenPosition) {
        element.classList.add('fade-in');
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Iniciar verificação quando a página carrega
});

// Função para fazer o site ser responsivo em diferentes dispositivos
function handleResponsiveness() {
  // Verificando largura da tela para ajustar elementos
  const width = window.innerWidth;
  
  // Ajustes para telas menores (tablets e celulares)
  if (width <= 900) {
    document.querySelectorAll('.about-content, .contact-content').forEach(el => {
      el.style.flexDirection = 'column';
    });
  } else {
    document.querySelectorAll('.about-content, .contact-content').forEach(el => {
      el.style.flexDirection = 'row';
    });
  }
}

// Executar quando a página carrega e quando redimensiona
window.addEventListener('load', handleResponsiveness);
window.addEventListener('resize', handleResponsiveness);

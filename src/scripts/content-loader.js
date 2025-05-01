
// Função para carregar conteúdo JSON e popular os elementos na página
document.addEventListener('DOMContentLoaded', function() {
  // Carregar dados do site
  fetch('/content/site.json')
    .then(response => response.json())
    .then(data => {
      document.title = data.title;
      
      // Atualizar itens de navegação
      if (data.navigation) {
        const menuItems = document.querySelectorAll('.menu li a');
        data.navigation.forEach((item, index) => {
          if (menuItems[index]) {
            menuItems[index].textContent = item.text;
            menuItems[index].href = item.url;
          }
        });
      }
    })
    .catch(error => console.error('Erro ao carregar dados do site:', error));
  
  // Carregar dados do hero banner
  fetch('/content/hero.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('banner-title').innerHTML = data.title;
      document.getElementById('banner-subtitle').textContent = data.subtitle;
      
      const ctaButton = document.getElementById('banner-cta');
      ctaButton.textContent = data.cta_text;
      ctaButton.href = data.cta_link;
    })
    .catch(error => console.error('Erro ao carregar dados do banner:', error));
  
  // Carregar dados da seção Sobre
  fetch('/content/about.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('about-title-highlight').textContent = data.title_highlight;
      document.getElementById('about-text-1').textContent = data.paragraphs[0];
      document.getElementById('about-text-2').textContent = data.paragraphs[1];
      
      const ctaButton = document.getElementById('about-cta');
      ctaButton.textContent = data.cta_text;
      ctaButton.href = data.cta_link;
    })
    .catch(error => console.error('Erro ao carregar dados da seção Sobre:', error));
  
  // Carregar dados da seção Serviços
  fetch('/content/services.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('services-title-highlight').textContent = data.title_highlight;
      
      const servicesGrid = document.getElementById('services-grid');
      servicesGrid.innerHTML = ''; // Limpa o conteúdo existente
      
      data.items.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        serviceCard.innerHTML = `
          <div class="icon-container">
            <i class="fas fa-${service.icon}"></i>
          </div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <a href="${service.link}" class="service-button">Saiba Mais</a>
        `;
        
        servicesGrid.appendChild(serviceCard);
      });
    })
    .catch(error => console.error('Erro ao carregar dados dos serviços:', error));
  
  // Carregar dados da seção Depoimentos
  fetch('/content/testimonials.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('testimonials-title-highlight').textContent = data.title_highlight;
      
      const testimonialSlider = document.getElementById('testimonial-slider');
      testimonialSlider.innerHTML = ''; // Limpa o conteúdo existente
      
      data.items.forEach(testimonial => {
        const testimonialContainer = document.createElement('div');
        testimonialContainer.className = 'testimonial-container';
        
        testimonialContainer.innerHTML = `
          <div class="testimonial">
            <div class="client-image">
              <div class="image-placeholder">
                <i class="fas fa-user"></i>
              </div>
            </div>
            <div class="testimonial-content">
              <div class="quote"><i class="fas fa-quote-left"></i></div>
              <p>${testimonial.feedback}</p>
              <div class="client-info">
                <h4>${testimonial.author}</h4>
                <span>${testimonial.profession}</span>
              </div>
            </div>
          </div>
        `;
        
        testimonialSlider.appendChild(testimonialContainer);
      });
    })
    .catch(error => console.error('Erro ao carregar dados dos depoimentos:', error));
  
  // Carregar dados da seção Contato
  fetch('/content/contact.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('contact-title-highlight').textContent = data.title_highlight;
      document.getElementById('contact-submit').textContent = data.submit_text;
      
      const contactInfo = document.getElementById('contact-info');
      contactInfo.innerHTML = ''; // Limpa o conteúdo existente
      
      // Endereço
      const addressItem = document.createElement('div');
      addressItem.className = 'info-item';
      addressItem.innerHTML = `
        <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
        <div class="text">
          <h3>${data.contact_info.address.title}</h3>
          <p>${data.contact_info.address.value}</p>
        </div>
      `;
      contactInfo.appendChild(addressItem);
      
      // Telefone
      const phoneItem = document.createElement('div');
      phoneItem.className = 'info-item';
      phoneItem.innerHTML = `
        <div class="icon"><i class="fas fa-phone-alt"></i></div>
        <div class="text">
          <h3>${data.contact_info.phone.title}</h3>
          <p>${data.contact_info.phone.value}</p>
        </div>
      `;
      contactInfo.appendChild(phoneItem);
      
      // Email
      const emailItem = document.createElement('div');
      emailItem.className = 'info-item';
      emailItem.innerHTML = `
        <div class="icon"><i class="fas fa-envelope"></i></div>
        <div class="text">
          <h3>${data.contact_info.email.title}</h3>
          <p>${data.contact_info.email.value}</p>
        </div>
      `;
      contactInfo.appendChild(emailItem);
      
      // Redes sociais
      const socialMedia = document.createElement('div');
      socialMedia.className = 'social-media';
      
      data.contact_info.social_media.forEach(social => {
        const socialIcon = document.createElement('a');
        socialIcon.href = social.url;
        socialIcon.className = 'social-icon';
        socialIcon.innerHTML = `<i class="fab fa-${social.platform}"></i>`;
        socialMedia.appendChild(socialIcon);
      });
      
      contactInfo.appendChild(socialMedia);
    })
    .catch(error => console.error('Erro ao carregar dados de contato:', error));
  
  // Carregar dados do rodapé
  fetch('/content/footer.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('footer-copyright').innerHTML = data.copyright;
    })
    .catch(error => console.error('Erro ao carregar dados do rodapé:', error));
});

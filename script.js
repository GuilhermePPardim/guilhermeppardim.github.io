document.addEventListener('DOMContentLoaded', function() {
    
    // Configuração do Typed.js
    var options = {
        strings: [
            'Desenvolvedor de Software', 
            'Desenvolvedor Full Stack', 
            'Apaixonado por Tecnologia',
            'Resolutor de Problemas'
        ],
        typeSpeed: 60,  
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,  
        loop: true      
    };

    var typed = new Typed('#typed-text', options);

    // Configuração do ScrollReveal - animações fluídas
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1500,
        delay: 200,
        reset: false, // Define se animação repete quando o elemento some e volta (true seria legal mas menos profissional)
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    });

    // Revelações específicas
    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-bottom', { origin: 'bottom', delay: 300 });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
    sr.reveal('.reveal-up', { origin: 'bottom', interval: 200 }); // Cards revelam um por um

    // Funcionalidade "Voltar ao Topo"
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) { 
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // Efeito responsivo para Navbar no scroll
        const navbar = document.getElementById('navegador');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.75)';
            navbar.style.boxShadow = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });
    });
    
    // Ajustar o scroll natural nos links de navegação devido à navbar fixa
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
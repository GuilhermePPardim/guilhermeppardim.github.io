document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['Desenvolvedor de Software', 'Desenvolvedor Full Stack', 'Apaixonado por Tecnologia'],
        typeSpeed: 50,  
        backSpeed: 25,  
        loop: true      
    };

    var typed = new Typed('#typed-text', options);


const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
    reset: false
});

sr.reveal('.profile-picture, #sobre article, #habilidades ul, #projetos, #extras', { origin: 'top' });
sr.reveal('.project-card', { origin: 'bottom', interval: 200 });
});
    
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { 
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });
    });
// ...
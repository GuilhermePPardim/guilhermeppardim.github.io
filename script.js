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

sr.reveal('.profile-picture, #sobre article, #habilidades ul', { origin: 'top' });
sr.reveal('.project-card', { origin: 'bottom', interval: 200 });
});


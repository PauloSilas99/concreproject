function initScrollSuave(){
    const linkInterno = document.querySelectorAll('.links a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    
    
    linkInterno.forEach((links)=>{
        links.addEventListener('click',scrollToSection) 
    });
    
}
initScrollSuave()

window.sr=ScrollReveal({ reset: true});
sr.reveal('.quadrado',{duration:1250});

sr.reveal('.texto',{rotate:{x:0,y:80,z:0},duration:2000});

sr.reveal('.fundo2',{rotate:{x:100,y:0,z:100},duration:2000});

//sr.reveal('.parag',{duration:2000});
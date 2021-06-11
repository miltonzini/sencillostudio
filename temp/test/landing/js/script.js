const btnHamburguer = document.querySelector('#btnHamburguer');const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const headerAnchor = document.querySelectorAll('.header__menu__anchor');


btnHamburguer.addEventListener('click', function(){
    console.log('open haburguer');

    if (header.classList.contains('open')){ // close Hamburger menu 
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');    
        });
        
    }
    else { // Open Hamburger menu  
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });    
    }
});

// Cerrar Overlay al clickear anchor
headerAnchor.forEach((anchor) => {
    anchor.addEventListener('click', () => {
        console.log("anchor clicked");

        if (header.classList.contains('open')){ // close Hamburger menu 
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');    
            });
            
        }
        else { // Open Hamburger menu  
            body.classList.add('noscroll');
            header.classList.add('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });    
        }
    });
});
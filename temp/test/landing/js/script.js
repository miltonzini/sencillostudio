const btnHamburguer = document.querySelector('#btnHamburguer');

btnHamburguer.addEventListener('click', function(){
    console.log('open haburguer');

    if (btnHamburguer.classList.contains('open')){
        btnHamburguer.classList.remove('open');
    }
    else {
        btnHamburguer.classList.add('open');
    }
});
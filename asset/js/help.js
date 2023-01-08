const $ = document.querySelector.bind(document)


$('#close-lang').onclick = function() {
    $('.language').style.display = 'none';
}


$('.header-menubtn').onclick = function() {
    $('.header-menubtn-close').style.display = 'block'
    $('.header__group.link').style.display = 'block'
    $('.header-menubtn').style.display = 'none'
}

$('.header-menubtn-close').onclick = function() {
    $('.header-menubtn-close').style.display = 'none'
    $('.header__group.link').style.display = 'none'
    $('.header-menubtn').style.display = 'block'
}


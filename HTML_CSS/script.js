function $(selector, container) {
    return (container || document).querySelector(selector);
}

$('.nav-btn').addEventListener('click', function (event) {
    event.preventDefault();
    $('.nav__items').style.display == 'block' ? ($('.nav__items').style.display = 'none') : $('.nav__items').style.display = 'block';
    // $('.nav__items').style.display == 'block' ? $('.nav__items').style.display = 'none' : $('.nav__items').style.display == 'block';
})
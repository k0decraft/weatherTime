// JAVASCRIPT DOCUMENT


console.log('Slide menu!');


function slide() {
    var body = $('body');
    $('.menu_toggle').bind('click', function() {
        body.toggleClass('menu_open');
        return false;
    });
}

slide();
$(document).ready(function () {
    console.log('yes');
    $('#fullpage__container').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        afterLoad: function(anchorLink, index){
            $('.section[data-anchor="' + anchorLink + '"]').find('.content').addClass('active');
            $('.global-nav').addClass('active')
        },
        onLeave: function (index, nextIndex, direction) {
            $('.section .content').removeClass('active');
            $('.global-nav').removeClass('active');

            setTimeout(function () {
                if($('.section[data-anchor="section'+ nextIndex+ '"]').hasClass('light')){
                    $('.global-nav').addClass('black');
                }else {
                    $('.global-nav').removeClass('black');
                }
            }, 300)
        }
    });
    $('.nav-arrows .btn.up').click(function () {
        $.fn.fullpage.moveSectionUp();
    });
    $('.nav-arrows .btn.down').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
});
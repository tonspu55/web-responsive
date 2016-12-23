$(document).ready(function() {
    $(window).bind('scroll', function(e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolledY = $(window).scrollTop();
        if ($(window).width() >= 1025) {
            $('.vertical').css('top', '-' + ((scrolledY * 1.3)) + 'px');
            $('.vertical02').css('top', '-' + ((scrolledY * 0.05)) + 'px');
            $('.horizontal1').css('top', '-' + ((scrolledY * 0.005)) + '%');
            $('.opacity').css('opacity', +(scrolledY * 0.003));
        }


    }
});

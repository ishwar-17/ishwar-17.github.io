(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click().fadeIn(200);
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); 

// Counter Amount
jQuery({ Counter: 0 }).animate({ Counter: parseInt($('#Single').text()) }, {
  duration: 3000,
  step: function () {
    $('#Single').text('$'+ Math.ceil(this.Counter).toLocaleString());
  }
});

// Overlay Js 
$(document).ready(function(){
    $('.thumbnail').hover(
        function(){
            $(this).find('.overlay').slideDown(600); //.fadeIn(250)
        },
        function(){
            $(this).find('.overlay').slideUp(600); //.fadeOut(205)
        }
    ); 
});

// on hover anmaite link
$('.message-inner .message-item').on({
        'mouseenter':function() {
            $(this).addClass('circle');
            $(this).prevAll().addClass('circle');
            $(this).prevAll().addClass('line');
        },
        'mouseleave':function() {
            $(this).removeClass('circle');
            $(this).prevAll().removeClass('circle');
            $(this).prevAll().removeClass('line');
        }
    });

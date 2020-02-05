jQuery(document).ready(function($) {
    $(window).scroll(function() {
     var scrollPosition = $(window).scrollTop(),
      navbar = $('.fixed-top');
      
     if (scrollPosition > 500) {
      navbar.addClass('change-fix-top');
     } else {
      navbar.removeClass('change-fix-top');
     }
    });
   });

   $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      speed: 1000,
      easing: 'linear',
      infinite: false,
      initialSlide:1
   });
   $('.question_subtitle__').click(function (event) {
      if ($('.question__').hasClass('one')) { /* start Акордеон */
         $('question_subtitle__').not($(this)).removeClass('.active');
         $('.question_text__').not($(this).next()).slideUp(300);
      }                                         /* end Акордеон*/
      $(this).toggleClass('active').next().slideToggle(300);
   });
});
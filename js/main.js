/*************     dropdown menu    ************/
$('.dropdown').click(function () {
  $('.menu').show(500);
  $('.menu').addClass('active');
});

$('.menu a').click(function () {
  $('.menu').hide(100);
  $('.menu').removeClass('active');
});

$(document).mouseup(function () {
      var popup = $('.menu');
      popup.removeClass('active');
        
      
      });
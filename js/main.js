/*************     dropdown menu    ************/
$('.dropdown').click(function () {
  $('.menu').show(500);
  $('.menu').addClass('active');
});
/*************     закрытие по ссылке    ************/
$('.menu a').click(function () {
  $('.menu').hide(500);
  $('.menu').removeClass('active');
});
/*************     закрытие по кнопке    ************/
$('.close-menu').click(function () {
  $('.menu').hide(500);
  $('.menu').removeClass('active');
});

/*********************     плавный скролл        ************************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});
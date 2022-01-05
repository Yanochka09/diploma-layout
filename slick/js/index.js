$(document).ready(function(){
  $('.menu-slick-slide1').slick({
  slidesToShow: 1,
  dots: true,
  arrows: false,
});
});

$(document).ready(function(){
$('.comment-slick-slide2').slick({
  slidesToShow: 1,
  arrows: true,
  dots: true,
});
});

$(document).ready(function(){
$('.chance-bottom').slick({
  dots: false,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
});
$('.menu-slick-slide1').slick({
  slidesToShow: 1,
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }]
});

$('.comment-slick-slide2').slick({
  slidesToShow: 1,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }]
});

$('.chance-bottom').slick({
  dots: false,
  infinite:true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
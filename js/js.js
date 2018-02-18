$('.sl').slick({
  	autoplay: true,
  	autoplaySpeed: 4000,
  	centerPadding: '50px',
  	dots: true,
  	arrows: true,
    cssEase:'ease-in',
  	pauseOnDotsHover: true,
  	slidesToShow: 1,
  	slidesToScroll: 1
});


$('.team-grid').slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
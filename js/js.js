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


$("#iconfor").hover(function() {
      var src = ($(this).attr("src") === "images/69366.png")
                    ? "images/693662.png" 
                    : "images/69366.png";
      $(this).attr("src", src);
});
$("#iconfor2").hover(function() {
      var src = ($(this).attr("src") === "images/img_2644.png")
                    ? "images/img_26442.png" 
                    : "images/img_2644.png";
      $(this).attr("src", src);
});
$("#iconfor3").hover(function() {
      var src = ($(this).attr("src") === "images/58-youtube-512.png")
                    ? "images/58-youtube-5122.png" 
                    : "images/58-youtube-512.png";
      $(this).attr("src", src);
});
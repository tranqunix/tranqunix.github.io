$('.sl').slick({
   	slidesToShow: 1,
   	slidesToScroll: 1,
   	arrows: true,
   	asNavFor: '.sl2'
});

$('.sl2').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: '.sl',
	dots: false,
	arrows: false,
	centerMode: true,
	infinite: true,
	focusOnSelect: true
});


var img1 = document.getElementById("slide1");
var modalImg1 = document.getElementById("img01");
img1.onclick = function () {
modalImg1.src = this.src;
}	

var img2 = document.getElementById("slide2");
var modalImg2 = document.getElementById("img01");
img2.onclick = function () {
modalImg2.src = this.src;
}

var img3 = document.getElementById("slide3");
var modalImg3 = document.getElementById("img01");
img3.onclick = function () {
modalImg3.src = this.src;
}	

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
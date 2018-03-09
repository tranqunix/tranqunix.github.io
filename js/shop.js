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
var img = document.getElementByClassName("sl__img");
var modalImg = document.getElementById("img01");
img.onclick = function () {
	modalImg.src = this.src;
}	

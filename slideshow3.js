// trying to implement a slideshow of pictures 

var slideshow = new Array();
slideshow[0] = "Travel/PR-3-0.jpg";
slideshow[1] = "Travel/PR-3-1.jpg";
slideshow[2] = "Travel/PR-3-2.jpg";

var counter = 0;
function nextpic(){
	document.getElementById('slide3').src = slideshow[counter];
	if (counter < 2) {
		counter++;
	} else {
		counter = 0;
	}
	setTimeout("nextpic()", 4000);
}

nextpic();
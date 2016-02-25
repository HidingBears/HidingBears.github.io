// trying to implement a slideshow of pictures 

var slideshow = new Array();
slideshow[0] = "Travel/PR-5-0.jpg";
slideshow[1] = "Travel/PR-5-1.jpg";
slideshow[2] = "Travel/PR-5-2.jpg";
slideshow[3] = "Travel/PR-5-3.jpg";
slideshow[4] = "Travel/PR-5-4.jpg";

var counter = 0;
function nextpic(){
	document.getElementById('slide5').src = slideshow[counter];
	if (counter < 4) {
		counter++;
	} else {
		counter = 0;
	}
	setTimeout("nextpic()", 4000);
}

nextpic();
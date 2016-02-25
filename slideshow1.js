// trying to implement a slideshow of pictures 

var slideshow1 = new Array();
slideshow1[0] = "Travel/PR-1-0.jpg";
slideshow1[1] = "Travel/PR-1-1.jpg";
slideshow1[2] = "Travel/PR-1-2.jpg";
slideshow1[3] = "Travel/PR-1-3.jpg";

var slideshow3 = new Array();
slideshow3[0] = "Travel/PR-3-0.jpg";
slideshow3[1] = "Travel/PR-3-1.jpg";
slideshow3[2] = "Travel/PR-3-2.jpg";

var slideshow5 = new Array();
slideshow5[0] = "Travel/PR-5-0.jpg";
slideshow5[1] = "Travel/PR-5-1.jpg";
slideshow5[2] = "Travel/PR-5-2.jpg";
slideshow5[3] = "Travel/PR-5-3.jpg";
slideshow5[4] = "Travel/PR-5-4.jpg";

var counter1 = 0;
var counter3 = 0;
var counter5 = 0;

function nextpic(){
	document.getElementById('slide1').src = slideshow1[counter1];
	if (counter1 < 3) {
		counter1++;
	} else {
		counter1 = 0;
	}
	document.getElementById('slide3').src = slideshow3[counter3];
	if (counter3 < 2) {
		counter3++;
	} else {
		counter3 = 0;
	}
	document.getElementById('slide5').src = slideshow5[counter5];
	if (counter5 < 4) {
		counter5++;
	} else {
		counter5 = 0;
	}
	setTimeout("nextpic()", 4000);
}

nextpic();
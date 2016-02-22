					var updateClock = setInterval(clock, 1000);

					function clock() {
						var date = new Date();
						hour = date.getHours();
						minute = date.getMinutes();
						seconds = date.getSeconds();
						if (minute < 10) {minute = "0" + minute};
						if (seconds < 10) {seconds = "0" + seconds};
						time = hour%12 + "\:" + minute + "\:" + seconds;
						document.getElementById("time").innerHTML = time;
					}

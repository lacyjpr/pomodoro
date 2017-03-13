$(document).ready(function() {

	var breakTime = 5;
	var workTime = 25;
	

	// Increment/decrement break time
	$(".breakPlus").on("click", function() {
		if (breakTime < 999) {
			breakTime++;
			$(".breakTime").html(breakTime);
		}
	});
	$(".breakMinus").on("click", function() {
		if (breakTime > 1) {
			breakTime--;
			$(".breakTime").html(breakTime);
		}

	});

	// Increment/decrement work time
	$(".workPlus").on("click", function() {
		if (workTime < 999) {
			workTime++;
			$(".workTime").html(workTime);
			$(".display").html(workTime + ":00");
		}
	});
	$(".workMinus").on("click", function() {
		if (workTime > 1) {
			workTime--;
			$(".workTime").html(workTime);
			$(".display").html(workTime + ":00");
		}
	});

	// Reset to original values
	$(".reset").on("click", function() {
		breakTime = 5;
		workTime = 25;
		$(".display").html("25:00");
		clearInterval(counter);
	});

	$(".start").on("click", function() {
		countDown(workTime);
	});

	function countDown(val) {
		// Timer credit: http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
		var time = toSeconds(val);
		counter = setInterval(timer, 1000);
		function timer() {
			time = time - 1;
			if (time <= 0) {
				clearInterval(counter);
				return;
			}
			$(".display").html(toMinutes(time));
		}
	}		

	function toSeconds(val) {
		return val * 60;
	}

	function toMinutes(val) {
		// Convert seconds to minutes and seconds credit: http://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
		var minutes = Math.floor(val / 60);
		var seconds = val - minutes * 60;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		return minutes + ":" + seconds;
	}


});
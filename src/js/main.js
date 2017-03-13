$(document).ready(function() {

	var breakTime = 5;
	var workTime = 25;
	var state = "";
	var isPaused = false;

	// Increment/decrement break time
	$(".breakPlus").on("click", function() {
		if (breakTime < 999 && state !== "running") {
			breakTime++;
			$(".breakTime").html(breakTime);
		}
	});
	$(".breakMinus").on("click", function() {
		if (breakTime > 1 && state !== "running") {
			breakTime--;
			$(".breakTime").html(breakTime);
		}

	});

	// Increment/decrement work time
	$(".workPlus").on("click", function() {
		if (workTime < 999 && state !== "running") {
			workTime++;
			$(".workTime").html(workTime);
			$(".display").html(workTime + ":00");
		}
	});
	$(".workMinus").on("click", function() {
		if (workTime > 1 && state !== "running") {
			workTime--;
			$(".workTime").html(workTime);
			$(".display").html(workTime + ":00");
		}
	});

	// Reset to original values
	$(".reset").on("click", function() {
		breakTime = 5;
		workTime = 25;
		state = "";
		$(".breakTime").html(breakTime);
		$(".workTime").html(workTime);
		$(".display").html("25:00");
		clearInterval(counter);
	});

	$(".start").on("click", function() {
		state = "running";
		workTimer(workTime);
		$(this).text("Pause");
		$("#starter").removeClass("start").addClass("pause");
	});

	$(".pause").on("click", function() {
		// credit: http://stackoverflow.com/questions/21277900/javascript-pausing-setinterval
		isPaused = true;
		$(this).text("Start");
		$("#starter").addClass("start").removeClass("pause");
	});



	function workTimer(val) {
		// Timer credit: http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
		if (!isPaused) {
			var time = toSeconds(val);
			counter = setInterval(timer, 1000);
			function timer() {
				time = time - 1;
				if (time <= 0) {
					clearInterval(counter);
					breakTimer(breakTime);
				}
				$(".display").html(toMinutes(time));
			}
		}
	}

	function breakTimer(val) {
		// Timer credit: http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
		if (!isPaused) {
			var time = toSeconds(val);
			counter = setInterval(timer, 1000);
			function timer() {
				time = time - 1;
				if (time <= 0) {
					clearInterval(counter);
					workTimer(workTime);
				}
				$(".display").html(toMinutes(time));
			}
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
$(document).ready(function(){function e(e){c.play(),$(".getToWork").removeClass("hidden"),$(".progress").animate({width:"100%"},1e3*n(e)),$(".progress").queue(function(){$(this).dequeue()});var i=n(e);r=setInterval(function(){i-=1,i<=0&&($(".getToWork").addClass("hidden"),$(".progress").animate({width:"0%"},0),clearInterval(r),t(o+":00")),$(".content").html(a(i))},1e3)}function t(t){c.play(),$(".takeABreak").removeClass("hidden"),$(".breakTimer").animate({width:"100%"},1e3*n(t)),$(".breakTimer").queue(function(){$(this).dequeue()});var o=n(t);console.log("time "+n(t)),r=setInterval(function(){o-=1,o<=0&&($(".takeABreak").addClass("hidden"),$(".breakTimer").animate({width:"0%"},0),clearInterval(r),e(i+":00")),$(".content").html(a(o))},1e3)}function n(e){var t=e.split(":");console.log("arr "+t);var n=t[0],a=t[1];return parseInt(a,10)+60*parseInt(n,10)}function a(e){var t=Math.floor(e/60),n=e-60*t;return n=n<10?"0"+n:n,t+":"+n}var r,o=5,i=25,s="",c=new Audio("/media/alarm.mp3");$(".breakPlus").on("click",function(){o<999&&"running"!==s&&(o++,$(".breakTime").html(o))}),$(".breakMinus").on("click",function(){o>1&&"running"!==s&&(o--,$(".breakTime").html(o))}),$(".workPlus").on("click",function(){i<999&&"running"!==s&&(i++,$(".workTime").html(i),$(".content").html(i+":00"))}),$(".workMinus").on("click",function(){i>1&&"running"!==s&&(i--,$(".workTime").html(i),$(".content").html(i+":00"))}),$(".reset").on("click",function(){o=5,i=25,s="",$(".breakTime").html(o),$(".workTime").html(i),$(".content").html("25:00"),clearInterval(r),$(".progress").stop(!0,!0),$(".progress").animate({width:"0%"},0),$(".breakTimer").stop(!0,!0),$(".breakTimer").animate({width:"0%"},0),$(".getToWork").addClass("hidden"),$(".takeABreak").addClass("hidden")}),$(".start").on("click",function(){switch($(this).text()){case"Start":s="running",$("button.start").text("Pause"),$(".takeABreak").hasClass("hidden")?(e($(".content").text()),console.log($(".content").text())):(t($(".content").text()),console.log("content "+$(".content").text()));break;case"Pause":s="paused",clearInterval(r),$("button.start").text("Start")}})});
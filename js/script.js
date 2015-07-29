
$(document).ready(function(){


	/* ---- Countdown timer ---- */


	
	var a = moment();
	var b = moment('08/20/2015 12:30 +0000','M/D/YYYY HH:mm Z');
	var diffHours = b.diff(a, 'hours');

	$('#counter').countdown({
		timestamp : (new Date()).getTime() + diffHours*60*60*1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);



});

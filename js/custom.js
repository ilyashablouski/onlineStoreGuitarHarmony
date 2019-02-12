// Slider
$(document).ready(function () {
	$('.slider').glide({
		autoplay: 4000,
		hoverpause: true,
		arrowRightText: '&rarr;',
		arrowLeftText: '&larr;'
	})
});

// Scrolling button
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 300) {
			$('.gul-up').show('fast');
		} else {
			$('.gul-up').hide('fast');
		}
	});
	if ($(window).scrollTop() >= 300) {
		$('.gul-up').css('display', 'block');
	} else {
		$('.gul-up').css('display', 'none');
	}
	$('.gul-up').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
});

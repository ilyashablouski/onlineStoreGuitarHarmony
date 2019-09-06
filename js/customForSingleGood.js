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

//Switcher+zoom
$(document).ready(function () {
	if ($(window).width() > 768) {
		$('.reduced-image img').click(function () {
			var attr = $(this).attr('src');
			$('.main-image img').attr('src', attr);
			$('.fancy-link a').attr('href', attr);
			$('.zoom-effect').trigger('zoom.destroy');
			$('.zoom-effect').zoom();
		})
	} else {
		$('.reduced-image img').click(function () {
			var attr = $(this).attr('src');
			$('.main-image img').attr('src', attr);
			$('.fancy-link a').attr('href', attr);
		})};
	});

//Zoom
$(document).ready(function () {
	if ( $(window).width() > 768 ){
	$('.zoom-effect').zoom();
}});

//Tabs
function openMenu(){
	if ( $(window).width() <= 650) {
		$(this).toggleClass('in').next().slideToggle(300);
	}
}

$(document).ready(function () {
	$('.toogle-tab').on('click', openMenu);	
});



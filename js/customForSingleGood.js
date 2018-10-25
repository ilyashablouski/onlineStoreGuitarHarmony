//Switcher
$(document).ready(function () {
    $('.reduced-image img').click(function() {
		var attr = $(this).attr('src');
		$('.main-image img').attr('src', attr);
    });
});

//jQuery Zoom
$(document).ready(function () {
    $('.zoom-effect')
    .wrap('<div style="display:inline-block"></div>')
    .css('display', 'block')
    .parent()
    .zoom();
});
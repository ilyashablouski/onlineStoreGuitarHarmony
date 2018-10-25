//Switcher+zoom
$(document).ready(function () {
    $('.reduced-image img').click(function() {
		var attr = $(this).attr('src');
    $('.main-image img').attr('src', attr);
    $('.zoom-effect').trigger('zoom.destroy');
    $('.zoom-effect').zoom();
    });
});

//jQuery Zoom
$(document).ready(function () {
  $('.zoom-effect').zoom();
});

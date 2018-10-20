// Слайдер
$( document ).ready(function() {
  $('.slider').glide({
    autoplay: 3500,
    hoverpause: true,
    arrowRightText: '&rarr;',
    arrowLeftText: '&larr;'
  })
});

// Кнопка сколлинга
$(document).ready(function(){
	$(window).scroll(function(){ 
		if($(window).scrollTop()>=300){
			$('.gul-up').show('fast');
		}else{
			$('.gul-up').hide('fast');
		}
    });
    if($(window).scrollTop()>=300){
		$('.gul-up').css('display', 'block');
	}else{
		$('.gul-up').css('display', 'none');
	}
    $('.gul-up').click(function () { 
		$('html, body').animate({scrollTop:0}, 500);            
    });
});
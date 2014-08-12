$(document).ready(function() {
	$('.header__btn').click(function(){
		$('.main').addClass('main-open');
		return false;
	});
	$(this).click(function(){
		$('.main').removeClass('main-open');
		return false;
	});	
});



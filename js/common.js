$(document).ready(function() {

	$('.header__btn').click(function(){
		$('.main').addClass('main-open');
		$('.nav').addClass('nav-open');
		return false;
	});
	$(this).click(function(){
		$('.main').removeClass('main-open');
		$('.nav').removeClass('nav-open');
		return false;
	});	

	$('.user__pic').click(function(){
		$('.user').toggleClass('user-open');
		return false;
	});
	$(document).click(function(){
		$('.user').removeClass('user-open');
		return false;
	});	

});



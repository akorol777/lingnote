$(document).ready(function() {

	$('.header__title').click(function(){
		$('.main').addClass('main-open');
		$('.nav').addClass('nav-open');
		return false;
	});
	$(this).click(function(){
		//$('.main').removeClass('main-open');
		//$('.nav').removeClass('nav-open');
		$('.user').removeClass('user-open');
		return false;
	});

	$('.content').click(function(){
		$('.nav').removeClass('nav-open');
		$('.main').removeClass('main-open');
		return false;
	});	

	$('.nav__content, .nav__topper, .user').click(function(){
		return false;
	});	
	

	$('.user__pic').click(function(){
		$('.user').toggleClass('user-open');
		return false;
	});
	
	// $('.nav-open').click(function(){
	// 	return false;
	// });	

});



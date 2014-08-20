$(document).ready(function() {

	$('.header__title').click(function(){
		$('.main').addClass('main-open');
		$('.nav').addClass('nav-open');
		return false;
	});
	$(this).click(function(){
		$('.user').removeClass('user-open');
		$('.nav__item-popup').removeClass('popup-open');
		$('.nav__item-lose').removeClass('lose-open');				
		return false;
	});

	$('.nav__item-point').click(function(){
		$('.nav__item-popup').removeClass('popup-open');
		$('.nav__item-lose').removeClass('lose-open');		
		$(this).next().toggleClass('popup-open');
		return false;
	});
	$('.nav__item').click(function(){
		$('.nav__item-popup').removeClass('popup-open');	
		$('.nav__item-lose').removeClass('lose-open');			
		return false;
	});	

	$('.nav__item-link').click(function(){
		$(this).parent().parent().find('.nav__item-lose').addClass('lose-open');
		return false;
	});



	$('.content, .header').click(function(){
		$('.nav').removeClass('nav-open');
		$('.main').removeClass('main-open');
		$('.user').removeClass('user-open');
		$('.nav__item-popup').removeClass('popup-open');
		$('.nav__item-lose').removeClass('lose-open');						
		return false;
	});	

	$('.nav__content, .nav__topper, .user, .nav__item-popup').click(function(){
		return false;
	});	

	$('.nav__topper').click(function(){
		$('.nav__item-popup').removeClass('popup-open');
		$('.nav__item-lose').removeClass('lose-open');			
		return false;
	});		
	

	$('.user__pic').click(function(){
		$('.user').toggleClass('user-open');
		return false;
	});

});



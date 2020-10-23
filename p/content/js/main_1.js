$(function(){

// skill more...
$('.js_cts_more').click(function(){
	$(this).closest('.skill_set_cts').addClass('show');
});

// coreer more...
$('.js_career_more').click(function(){
	$(this).closest('.career_detail').addClass('show');
	// if($(this).closest('.career_detail.show')) {
	// 	$(this).closest('.career_detail').removeClass('show');
	// 	console.log(true);
	// } else {
	// 	$(this).closest('.career_detail').addClass('show');
	// 	console.log(false);
	// }

});

// nav
var flag = true;
$('.js_nav_open').click(function(){
	if(flag) {
		$(this).closest('.main_nav').removeClass('close');
		flag = false;
	} else {
		$(this).closest('.main_nav').addClass('close');
		flag = true;
	}
});

// scrpll
var h = $('header').height();
$(window).on('load scroll', function(){
	if ($(window).scrollTop() >= h) {
		$('.js_nav_open').fadeIn(100);
	} else {
		$('.js_nav_open').fadeOut(100);
		$('.main_nav').addClass('close');
		flag = true;
	}
});

});
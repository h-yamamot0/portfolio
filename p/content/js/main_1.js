$(function(){

// skill more...
$('.js_cts_more').click(function(){
	$(this).closest('.skill_set_cts').addClass('show');
});

// coreer more...
$('.js_career_more').click(function(){
	$(this).closest('.career_detail').addClass('show');
});

// scroll
var h = $('header').height();
$(window).on('load scroll', function(){
	if ($(window).scrollTop() >= h) {
		$('.main_nav').fadeIn(100);
	} else {
		$('.main_nav').fadeOut(100);
	}
});


// スムーススクロール
$(function () {
	$('a[href^="#"]').click(function () {
		var adjust = 0;
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top + adjust;
		$("html, body").animate({ scrollTop: position }, speed, "swing");
		return false;
	});
});

// 現在位置表示
$(function (){
	var set = 200 //変化位置
	var boxTop = [];
	var current = -1;

	$('.main_cts').each(function(i) {
		boxTop[i] = $(this).offset().top;
	});

	changeBox(0);

	// スクロール時の表示
	$(window).scroll(function() {
		scrollPosition = $(window).scrollTop();
		for (var i = boxTop.length - 1; i >= 0; i--) {
			if ($(window).scrollTop() > boxTop[i] - set) {
				changeBox(i);
				break;
			}
		}
	});

	// navの表示
	function changeBox(secNum) {
		if (secNum != current) {
			current = secNum;
			// secNum2 = secNum + 1;
			$('.main_nav ul li').removeClass('link_now');
			$('.main_nav ul li').eq(secNum).addClass('link_now');
			
		}
	};
});


});
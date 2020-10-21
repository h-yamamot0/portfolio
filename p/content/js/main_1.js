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

});
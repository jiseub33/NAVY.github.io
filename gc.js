moveScrollLeft = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX + 200);
};

moveScrollright = function() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX - 200);
};
!function($) {

!function() {
	var koolaid$ = $('form[name="koolaid"]'),
		textField$ = $('input[type="text"]'),
		result$ = $('[data-target="result"]');
	textField$
		.on('focus', function() {
			$(this).select();
		}).on('mouseup', function(e) {
			e.preventDefault();
		});
	koolaid$.on('submit', function() {
		var that = $(this),
			number$ = that.find('input[name="number"]').val(),
			result;
		if(isFibonacci(number$)) {
			result = number$ + ' is part of the Fibonacci Sequence';
		} else {
			result = number$ + ' is NOT part of the Fibonacci Sequence';
		}
		result$.html(result);
		return false;
	});
}();

}(jQuery);
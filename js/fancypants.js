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
			answer = willItBlend(number$);

		result$.html(answer);
		return false;
	});
}();

}(jQuery);
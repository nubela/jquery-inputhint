// author: nubela

// Usage: $(obj).inputHint(hint, color_for_hint_text, color_for_actual_input)
// Example: $(".emailadddress").inputHint("your email address..", "#ffffff", "#383838");

jQuery.fn.inputHint = function(hint, hintColor, actualColor) {
	
	$(this).focus(function() {
		var val = $(this).val();
		
		// remove hint on focus
		if (val == hint) {
			$(this).val("");
			$(this).css("color", actualColor);
		}	
	});
	
	$(this).blur(function() {
		var val = $(this).val();
		val = $.trim(val);
		if (val == "") {
			$(this).val(hint);
			$(this).css("color", hintColor);
		}
	});
}
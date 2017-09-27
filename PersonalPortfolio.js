jQuery(function($) {
	$("#linkAbout").click(function() {
		$.scrollTo(0, 500);	
	});

	$("#linkContact").click(function() {
		$.scrollTo($("#contact"), 500);
	});

	$("#linkPortfolio").click(function() {
		$.scrollTo($("#portfolio"), 500);
	});
})
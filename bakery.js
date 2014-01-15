//if this has class show then do nothing, under function pages

function navColours() {
	$("nav p").each(function() {
		if($(this).hasClass("hover")) {
			$(this).animate({
				color: jQuery.Color( "rgb(52,56,89)" )}, "fast");
				$(this).removeClass('hover');
		}
	});
	$(this).addClass('hover');
}

function pages(event) {
	var page = event.data.param;
	if (!$("#" + page).hasClass("show")) {
		$('#pages div').each(function() {
			if($(this).hasClass("show")) {
				$(this).fadeOut( "fast", function() {
					$(this).addClass('hide').removeClass("show");
					$("#" + page).fadeIn("fast", function() {
						$("#" + page).removeClass("hide").addClass("show");
					});
				});
			}
		});
	}
}

$(document).ready(function(){
	$('.carousel').carousel();
	$('#pageOne').addClass('hover');
	$('#bakery').addClass('show');
	$("#products, #story, #contact").addClass('hide');
	$("nav>p").click(navColours);
	$('#pageOne').click({param:"bakery"}, pages);
	$('#pageTwo').click({param:"products"}, pages);
	$('#pageThree').click({param:"story"}, pages);
	$('#pageFour').click({param:"contact"}, pages);	
	$("nav>p").hover(
		function() {
			$(this).animate({
				color: jQuery.Color( "rgb(96,166,133)" )}, "fast");
		},
		function() {
			if($(this).hasClass('hover')) {
				$(this).removeAttr('style');
			}
			else {
			$(this).animate({
				color: jQuery.Color( "rgb(52,56,89)" )}, "fast");
			}
	});

	$('.carousel-control').hover(
		function() {
			$(this).animate({
				color: jQuery.Color( "rgb(52,56,89)" )}, "fast");
	},
		function() {
			$(this).animate({
				color: jQuery.Color( "rgb(255,255,255)" )}, "fast");
	});
});

// Cache the window object
var theWindow = $(window);

// For each section with data-type equal to "background"
$('section[data-type="background"]').each(function(){

	var bgobj = $(this);

	// When the window is scrolled...
	$(window).scroll(function(){

		// The background should scroll at 1/5th the speed of the page itself.
		var yPos = -(theWindow.scrollTop() / bgobj.data('speed'));

		var coords = '50% ' + yPos + 'px';

		// Do repositioning.
		bgobj.css({backgroundPosition : coords});
	});
});

// This handles the smooth scrolling that happens when the user clicks a link
// in the nav bar.
$('.scrollLink').click(function(){
		
		// Determine the height of the navbar.
	var navBarHeight = $(".nav").height();

	// Animate the html and body elements...
	$('html, body').animate({
		
		// Scroll the top of the elements to the top of the value found by
		// parsing the href of the scroll link.
		scrollTop: $($(this).attr('href')).offset().top - navBarHeight

	}, 500);

	// Return false to prevent default functionality.
    return false;
});
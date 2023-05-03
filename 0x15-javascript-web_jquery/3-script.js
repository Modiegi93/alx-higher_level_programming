const redHeader = $('#red_header');

redHeader.on('click', function() {
	const header = $('header');
	header.addClass('red');
});

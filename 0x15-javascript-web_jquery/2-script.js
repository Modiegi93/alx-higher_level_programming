const redHeader = $('#red_header');

redHeader.on('click', function() {
	const header = $('header');
	header.css('color', '#FF0000');
});

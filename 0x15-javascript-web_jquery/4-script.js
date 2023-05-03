const toggleHeader = $('#toggle_header');
const header = $('header');

toggleHeader.click(function () {
	if (header.hasClass('red')) {
		header.removeClass('red');
		header.addClass('green');
	} else if (header.hasClass('green')) {
		header.removeClass('green');
		header.addClass('red');
	}
});

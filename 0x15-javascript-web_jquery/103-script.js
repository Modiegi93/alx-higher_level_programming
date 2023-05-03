$(document).ready(function () {
	$('#btn_translate').click(translate);
	$('#language_code').keypress(function (event) {
		if (event.keyCode === 13) {
			translate();
		}
	});
});

function translate() {
	const languageCode = $('#language_code').val();
	const apiUrl = 'https://www.fourtonfish.com/hellosalut/';
	const endpointUrl = apiUrl + '?lang=' + languageCode;

	$.get(endpointUrl, function (data) {
		const translation = data.hello;
		$('#hello').text(translation);
	});
}

$(document).ready(function () {
	$('#btn_translate').click(function () {
		const languageCode = $('#language_code').val();
		const apiUrl = 'https://www.fourtonfish.com/hellosalut/';
		const endpointUrl = apiUrl + '?lang=' + languageCode;
		$.get(endpointUrl, function (data) {
			$('#hello').text(data.hello);
		});
	});
});

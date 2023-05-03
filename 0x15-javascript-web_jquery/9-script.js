$.ajax({
	url: "https://fourtonfish.com/hellosalut/?lang=fr",
	type: "GET",
	success: function (response) {
		$("#hello").text(response.hello);
	},
	error: function () {
		$("#hello").text("Error fetching translation.");
	},
});

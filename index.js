var prefix = "http://api.giphy.com/v1/gifs/search?q=";
var suffix = "&api_key=dc6zaTOxFJmzC";
var json = "";
var img;

$(document).ready(function() {
	main = $("#main-div");
	button = $("#button");
	img = $("<img></img>");
	main.append(img);
	button.click(handleForm);
});

var handleForm = function(event) {
	event.preventDefault();	
	var text = $("#the-text");
	var storedText = text.val();
	var searched = storedText.split(" ").join("+");
	var url = prefix + searched + suffix;
	console.log(url);
	$.get(url, handleResponse);
};

var handleResponse = function(response) {
	json = response;
	var i = Math.floor(Math.random() * json.data.length);
	var url = json.data[i].images.original.url;
	img.prop("src", url);
};

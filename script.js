$(function() {

	var $result = $("#where");

	$("button").on("click", getLocation);

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(goToMap, fail);
	    } else { 
	        $result.text("Geolocation is not supported by this browser.");
	    }
	}
	
	function fail() {
		$("#container").append("<p>Failed to get a location.</p>");
		console.log("fail");
	}

	function goToMap(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var url = "http://maps.google.com/maps?q=loc:"+latitude+","+longitude;
		window.location.href = url;
	};
});
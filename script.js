$(function() {

	var $result = $("#where");

	$("#goto").on("click", getLocation);

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(goTo, fail);
	    } else { 
	        $result.text("Geolocation is not supported by this browser.");
	    }
	}

	function showPosition(position) {

		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		$("div").show();

		$result.children().first().text(latitude);
		$result.children().last().text(longitude);

		var coords = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
		    zoom: 18,
		    center: coords,
		    mapTypeControl: true,
		    draggable: true,
		    navigationControlOptions: {
		    	style: google.maps.NavigationControlStyle.SMALL
		    },
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map1 = new google.maps.Map(document.getElementById("map"), mapOptions);
		var marker = new google.maps.Marker({
		    position: coords,
		    map: map1,
		    title:"You are here!"
		});
  
  		console.log(coords);
	}
	
	function fail() {

		$("body").append("<p>Fail.</p>");
		console.log("fail");
	}

	// $("#goto").on("click", goTo);

		function goTo(position) {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			var url = "http://maps.google.com/maps?q=loc:"+latitude+","+longitude;
			window.location.href = url; //http://maps.google.com/maps?q=loc: latitude , longitude
		};
});
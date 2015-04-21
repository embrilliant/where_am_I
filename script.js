$(function() {

	var $result = $("#where");

	$("button").on("click", getLocation);

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition, fail);
	    } else { 
	        $result.text("Geolocation is not supported by this browser.");
	    }
	}

	function showPosition(position) {

		// var script = document.createElement('script');
  // script.src = 'http://maps.googleapis.com/maps/api/js?sensor=true';
  // document.body.appendChild(script);

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

});
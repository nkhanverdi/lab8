function initMap() {
	// add your code here
	
	var ssc = {lat:32.879012, lng:-117.235844};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: ssc,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ssc,
		map: map,
		title: "UCSD"
	});

}

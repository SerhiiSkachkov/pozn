$(window).on('load', function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
});

	function initMap() {

	  var cordinate = {lat: 52.242, lng: 16.554},
	  	image = 'img/marker.png',
	  	map = new google.maps.Map(document.getElementById('map'), {zoom: 13, zoomControl: false, mapTypeControl: false,scrollwheel: false, panControl: false, center: cordinate}),
	  	marker = new google.maps.Marker({
	  		position: cordinate,
	  		icon: image,
	  		map: map,
	  		animation: google.maps.Animation.BOUNCE
	  	});
	}




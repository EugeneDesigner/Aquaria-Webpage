
// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);




// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


var map = null;

google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(59.3263, 18.0944));
});

function init() {
      var mapOptions = {

        zoom: 15,
        zoomControl: true,
        scrollwheel: false,


        center: new google.maps.LatLng(59.3263, 18.0944),


        disableDefaultUI: true,


    };


    var mapElement = document.getElementById('map');

        map = new google.maps.Map(mapElement, mapOptions);

    var image = '../img/map-marker.png';
    var myLatLng = new google.maps.LatLng(59.325505, 18.0942075);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}

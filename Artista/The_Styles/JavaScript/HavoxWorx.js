/*
 * Author: KyuubiKeith (BlerdCorps Minimalist Designs)
 * Version: 1.0
*/

"use strict";
$(document).ready(function() {

/*-----------------------------------------------------------------
Preloader
-------------------------------------------------------------------*/
function preLoader(){
    $("body").animate({opacity: 1}, 
    t, function() {
        $(".preLoader .word1").animate({
            opacity: 1
        }, 
        t, function() {
            $(".preLoader .word2").animate({
                opacity: 1
            }, 
            t, function() {
                $(".preLoader .word3").animate({
                    opacity: 1
                }, 
                t, function() {
                    $(".preLoader .word4").animate({
                        opacity: 1
                    }, 
                    t, function() {
                        $(".preLoader .word5").animate({
                        opacity: 1
                    },
                    t, function() {
                        $(".preLoader span").animate({
                            opacity: 0
                        }, t, function() {
                            $(".preLoader").animate({
                                opacity: 0
                            }, t, function() {
                                $(".preLoader").css('display', 'none');
                                $(".content .menu").animate({bottom: 0}, t);
                            });
                            });
                        });
                    });
                });
            });
        });
    });
}

/* Call preLoader */
var t = 1000;/* Time */
preLoader();

/*-----------------------------------------------------------------
Overlay Contact Menu
-------------------------------------------------------------------*/
function showContact(){
	
	//disable previously bind
	$("#contact").unbind("click");
	//animate
	$("body").css("position","absolute").animate({
		top: 301
	}, 600, function() {
		$(".contact.inner").animate({
			opacity: 1
		}, 600, function() {
			$('#contactInfo .info1').addClass("loaded");
			$('#contactInfo .info2').addClass("loaded");
			$('#contactInfo .info3').addClass("loaded");
			$('#contactInfo .info4').addClass("loaded");
			$('#contactInfo .info5').addClass("loaded");
			//set new bind on click
			$("#contact").click(function(e){
				e.preventDefault();
				hideContact();
			});
		});
	});
}

function hideContact(){
	
	//disable previously bind
	$("#contact").unbind("click");
	//animate
	$(".contact.inner").animate({
		opacity: 0
	}, 600, function() {
		$("body").animate({
			top: 0
		}, 600, function() {
			//restore position
			$(this).css("position","relative");
			//set new bind on click
			$("#contact").click(function(e){
				e.preventDefault();
				showContact();
			});
		});
	});
}

hideContact();
LoadMap();

$("#contact").click(function(e){
    e.preventDefault();
    showContact();
});

$("#contactInfo_close").click(function(e){
    e.preventDefault();
    hideContact();
});

});
/*-----------------------------------------------------------------
Overlay Map
-------------------------------------------------------------------*/
function initialize() {
    var styles = [        ];

    var mapOptions = {
        mapTypeControlOptions: {
            mapTypeIds: [ 'Custom_Map']
        },

        center: new google.maps.LatLng(-1.101822,37.014403),
        zoom: 16,
        mapTypeId: 'Custom_Map'
    };

    var styledMapType = new google.maps.StyledMapType(styles, { name: 'BlerdCorps\u00A9' });
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);    
    var pos = new google.maps.LatLng(-1.101822,37.014403);
    var title = "BlerdCorps\u00A9";

    map.mapTypes.set('Custom_Map', styledMapType);
    
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: title
    });
    /*
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    */
}

function LoadMap() {
    var API_KEY = "AIzaSyCdQyDnnP6DpPipsAbL1NaJFBZXdZitjfM";
    var script = document.createElement("script");
    script.type = "text/javascript";
    //script.src = "http://maps.googleapis.com/maps/api/js?key="AIzaSyCdQyDnnP6DpPipsAbL1NaJFBZXdZitjfM"&sensor=true&callback=initialize";
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=true&callback=initialize";
    document.body.appendChild(script);
    return true;
}
/* end gmaps v3 */
    
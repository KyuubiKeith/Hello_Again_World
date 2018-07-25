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
var t = 200;/* Time */
preLoader();

});
    
(function($) {
	"use strict";
	$(document).ready(function() {
		$( '.testi-slider .owl-carousel' ).owlCarousel({
			loop: true,
		    margin: 30,
		    dots: false,
		    autoplay: true,
		    nav: true,
		    responsive:{
		        0:{
		            items:1
		        },
		        470:{
		            items:2
		        },
		        640:{
		            items:3
		        },
		        990:{
		            items:4
		        }
		    }
		});

		$( '.custom-share-slider' ).owlCarousel({
			loop: true,
		    margin: 65,
		    dots: false,
		    autoplayTimeout: 7000,
		    autoplay: true,
		    nav: false,
		    responsive:{
		        0:{
		            items:1,
		            margin: 0
		        },
		        470:{
		            items:2,
		            margin: 30
		        },
		        640:{
		            items:3,
		            margin: 30
		        },
		        1201:{
		            items:4
		        }
		    }
		});

		$( '.tab-control li a' ).on('click', function(event) {
			event.preventDefault();
			var _this = $( this );
			var id = $( this ).attr( 'href' );
			$( this ).parents('ul').find( 'li' ).not( $(this).parent() ).removeClass('active');
			$( this ).parent().addClass('active');
			$( this ).parents('.tabs').find( '.tab-content' ).removeClass('open').hide();
			$( this ).parents('.tabs').find( id ).show();
			setTimeout(function() {
				$( _this ).parents('.tabs').find( id ).addClass('open');
			}, 500);
		});

		$( '.mobile-menu' ).on( 'click', function() {
			$( this ).parents( '.main-menu' ).toggleClass('open');
		});

		$( '.main-menu li a' ).on('click', function(event) {
            event.preventDefault();
            var id = $( this ).attr( 'href' );
            
            $( this ).parents('ul').find( 'li' ).removeClass('current-menu-item');
            $( this ).parent().addClass('current-menu-item');
            
            $('html, body').animate({
                scrollTop: $( id ).offset().top - 100
            }, 1500);
        });
	});
})(jQuery);
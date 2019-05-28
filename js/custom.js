$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){
	

	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
    if($('.styler').length){
        $('.styler').styler();
    };

    /* ---------------------------------------------- /*
	 * MaskedInput
	/* ---------------------------------------------- */
    if($('.tel-mask').length){
	    $(".tel-mask").mask("+7 (999) 999-99-99");
	}

   

    /* ---------------------------------------------- /*
	 * Owl Carousel
	/* ---------------------------------------------- */

    if($('.special-slider').length){
	    $('.special-slider').owlCarousel({
			navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			margin:0,
			nav:true,
			responsive:{
				0:{
			        items:1,
			        autoWidth: true,
			    },
			    576:{
			        items:2
			    },
			    768:{
			        items:3
			    },
			    992:{
			        items:4
			    },
			    1200:{
			        items:6
			    }
			}
		})
	}

	if($('.brands-slider').length){
		$('.brands-slider').owlCarousel({
			navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			margin:30,
			nav:true,
			responsive:{

			    0:{
			        items:2,
			        margin:15,
			    },
			    768:{
			        items:3
			    },
			    1000:{
			        items:4
			    }
			}
		})
	}
	
   
   function setSlider (){
        if ( $(window).width() > 970 ){
            if($('.service-previews').length){
				$('.service-previews').owlCarousel({
					navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
					margin:30,
					nav:true,
					responsive:{
					    0:{
					        items:1
					    },
					    600:{
					        items:2
					    },
					    1000:{
					        items:2
					    }
					}
				})
			}
        } else {
            $('.service-previews').owlCarousel().trigger('destroy.owl.carousel');
        }
    }

    setSlider();
    $( window ).resize( setSlider );


	/* ---------------------------------------------- /*
	 * Base
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		 if($('.special-slider').length){
		 	 $('.special-slider').owlCarousel().trigger('refresh.owl.carousel');
		 }
		
		return false
	});

	$('.js-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.dropdown-item').on({
	    mouseenter: function () {
	        $('.overlay').addClass('open');
	    },
	    mouseleave: function () {
	        $('.overlay').removeClass('open');
	    }

    })

});
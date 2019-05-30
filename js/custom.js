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


    $( "#slider-range" ).slider({
        range: true,
        min: 100,
        max: 5000,
        values: [ 500, 2500 ],
        slide: function( event, ui ) {
            $( "#f-price1" ).val( ui.values[ 0 ] );
            $( "#f-price2" ).val( ui.values[ 1 ] );

        }
    });
    $("#f-price1").on('change keyup paste', function() {
        $("#slider-range").slider('values',0,$(this).val());
    });
    $("#f-price2").on('change keyup paste', function() {
        $("#slider-range").slider('values',1,$(this).val());
    });

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

    $('.js-more-link').on('click', function(){
    	namebl = $(this).html();
        if(namebl == 'Показать ещё'){
            $(this).html('Cвернуть');
        }else{
           $(this).html('Показать ещё');
        }
    	$(this).parents('.filter__item').find('.filter-list .hidden').slideToggle(0);
    	return false;
    })

	var $menu = $(".dropdown-nav");

    // jQuery-menu-aim: <meaningful part of the example>
    // Hook up events to be fired on menu row activation.
    $menu.menuAim({
        activate: activateSubmenu,
        deactivate: deactivateSubmenu
    });

    function activateSubmenu(row) {
        var $row = $(row),
            submenuId = $row.data("submenuId"),
            $submenu = $("#" + submenuId),
            height = $menu.outerHeight(),
            width = $menu.outerWidth();

        // Show the submenu
        $submenu.css({
            display: "block",
            
        });

        // Keep the currently activated row's highlighted look
        $row.addClass("active");
    }

    function deactivateSubmenu(row) {
        var $row = $(row),
            submenuId = $row.data("submenuId"),
            $submenu = $("#" + submenuId);

        // Hide the submenu and remove the row's highlighted look
        $submenu.css("display", "none");
        $row.removeClass("active");
    }


    $('.card-item__slider .item').on('click', function(){
    	var thisUrl = $(this).data('url'),
    		thisElement = $(this)
    	$(this).parents('.card-item__slider').find('.item').not(thisElement).removeClass('active')
    	$(this).addClass('active').parents('.card-item').find('.card-item__img img').attr('src', thisUrl)
    	return false;
    })

    $('.js-open-filter').on('click', function(){
    	$('.filter').addClass('open');
    	$('.overlay').addClass('open');
    	return false;
    })

    $('.js-close-filter').on('click', function(){
    	$('.filter').removeClass('open');
    	$('.overlay').removeClass('open');
    	return false;
    })

    $('.overlay').on('click', function(){
    	$('.filter').removeClass('open');
    	$(this).removeClass('open');
    	return false;
    })

    $('.sorting-grid__link').on('click', function(){
    	$(this).parents('.content').find('.tab-content').hide();
    	var id = $(this).attr('href');
		$(id).show();
    	$('.sorting-grid__link').removeClass('active');
    	$(this).addClass('active');
    	return false;
    })


    

    
    $('.js-remove-card').on('click', function(){
		$(this).parents('.row-table__td').fadeOut(500, function(){$(this).remove()});
		return false;
	});
    
});
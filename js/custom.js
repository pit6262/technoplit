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


	$("[data-fancybox]").fancybox({
		autoFocus: false,
		touch: false,
		buttons: [
			// "zoom",
			//"share",
			// "slideShow",
			//"fullScreen",
			//"download",
			// "thumbs",
			"close"
		],
		
	});


   

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

	if($('.recently-watched').length){
	    $('.recently-watched').owlCarousel({
			navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
			margin:30,
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

			}
		})
	}

	

	if($('.slider-for').length){
	     $('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			variableWidth: true,
			prevArrow: '<button class="slick-prev slick-arrow"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
			nextArrow: '<button class="slick-next slick-arrow"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			focusOnSelect: true
		});
		
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

	$('.accordion__head').on('click', function(){
		var el = $(this);
		var elNext = $(this).next();
		var elData = $(this).data('class');

		$('.accordion-img__item').removeClass('open')
		$(this).parents('.accordion-wrap').find('.accordion-img__item'+elData).addClass('open')
		$('.accordion__head').not(el).removeClass('open')
		$('.accordion__body').not(elNext).slideUp(200)
		el.next('.accordion__body').slideDown(200);
		el.addClass('open');
		return false;
	});

	$('.m-block__short .m-more').on('click', function(){
		$(this).parents('.m-block__short').hide().next().show()
		return false;
	})
	$('.m-block__full .m-more').on('click', function(){
		$(this).parents('.m-block__full').hide().prev().show()
		return false;
	})


	$('a.anchor').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
		$('body,html').animate({scrollTop: bl_top}, 900);
		return false;
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
    	$('.navbar-mobile').removeClass('open');
    	$('.search-mobile').removeClass('open');
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

	$('.drop-button').on('click', function(){
		$(this).toggleClass('active').parents('.drop').find('.drop-list').toggleClass('open');
		return false;
	});

	$('.sorting-list__link').on('click', function(){
		var thisText = $(this).html();
		$('.sorting-list__link').removeClass('active')
		$(this).addClass('active').parents('.drop').find('.drop-list').removeClass('open');
		$(this).parents('.drop').find('.drop-button').removeClass('active').find('span').html(thisText);
		return false;
	});

	$('.form-dropdown__input input[type="text"]').on('change keyup', function(){
		if($(this).val().length > 0 ) {
			$(this).addClass('active').parents('.drop').find('.drop-list').addClass('open');
			
		} else {
			$(this).removeClass('active').parents('.drop').find('.drop-list').removeClass('open');
		}
		return false;
	});

	$(document).click( function(event){
      if( $(event.target).closest(".drop-list").length ) 
        return;
      $(".drop-button").removeClass("active");
      $('.form-dropdown__input input[type="text"]').removeClass("active");
      $('.drop-list').removeClass('open')
      event.stopPropagation();
    });

	
	$('.form-dropdown__list a').on('click', function(){
		var thisText = $(this).html();
		$(this).parents('.drop').find('.drop-list').removeClass('open');
		$(this).parents('.drop').find('.form-dropdown__input input[type="text"]').removeClass('active').val(thisText);
		return false;
	});

	$('.mmd-menu > a').on('click', function(){
		var thisParents = $(this).parent()
		$(this).parent().addClass('active')
		$(this).next().addClass('open')
		$(this).parent().parent().children('li').not(thisParents).not('.mobile-menu-dropdown__back').addClass('hidden')
		$('.mobile-menu-dropdown__back').addClass('open')
		return false;
	});

	$('.mobile-menu-dropdown__back').on('click', function(){
		$('.mobile-menu-dropdown li').removeClass('hidden')
		$('.mobile-menu-dropdown ul').removeClass('open')
		$('.mmd-menu').removeClass('active')
		$(this).removeClass('open')
		// $(this).next().addClass('open')
		// $(this).parent().parent().children('li').not(thisParents).not('.mobile-menu-dropdown__back').addClass('hidden')
		$(this).removeClass('open')
		return false;
	});

	

	$('.toggle-search').on('click', function(){
    	$('.search-mobile').addClass('open');
    	$('.overlay').addClass('open');
    	return false;
    })



	 $('.nav-toggle').on('click', function(){
    	$('.navbar-mobile').addClass('open');
    	$('.overlay').addClass('open');
    	return false;
    })

    $('.navbar-mobile__close').on('click', function(){
    	$('.navbar-mobile').removeClass('open');
    	$('.overlay').removeClass('open');
    	return false;
    })
	if($('.anchor-menu').length){
		 
	      $('.anchor-menu a').on("click", function(e){
	          var anchor = $(this);
	          $('html, body').stop().animate({
	              scrollTop: $(anchor.attr('href')).offset().top -40
	          }, 800);
	          e.preventDefault();
	      });


		  $(".anchor-menu a").click(function(event){
		    $(".anchor-menu a").removeClass("active");//удаляет все активные элементы
		    $(this).addClass("active");
		  });

		  jQuery(window).scroll(function(){
		    var $sections = $('.b-slide');
			$sections.each(function(i,el){
		        var top  = $(el).offset().top-70;
		        var bottom = top +$(el).height();
		        var scroll = $(window).scrollTop();
		        var id = $(el).attr('id');
		    	if( scroll > top && scroll < bottom){
		            $('.anchor-menu a').removeClass('active');
					$('.anchor-menu a[href="#'+id+'"]').addClass('active');

		        }
		    })
		 });
	      
	};


	
});

if($('#aside').length){
	(function(){
	var a = document.querySelector('#aside'), b = null, P = 10;
	window.addEventListener('scroll', Ascroll, false);
	document.body.addEventListener('scroll', Ascroll, false);
	function Ascroll() {
	  if (b == null) {
	    var Sa = getComputedStyle(a, ''), s = '';
	    for (var i = 0; i < Sa.length; i++) {
	      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
	        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
	      }
	    }
	    b = document.createElement('div');
	    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
	    a.insertBefore(b, a.firstChild);
	    var l = a.childNodes.length;
	    for (var i = 1; i < l; i++) {
	      b.appendChild(a.childNodes[1]);
	    }
	    a.style.height = b.getBoundingClientRect().height + 'px';
	    a.style.padding = '0';
	    a.style.border = '0';
	  }
	  var Ra = a.getBoundingClientRect(),
	      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#content').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
	  if ((Ra.top - P) <= 0) {
	    if ((Ra.top - P) <= R) {
	      b.className = 'stop';
	      b.style.top = - R +'px';
	    } else {
	      b.className = 'sticky';
	      b.style.top = P + 'px';
	    }
	  } else {
	    b.className = '';
	    b.style.top = '';
	  }
	  window.addEventListener('resize', function() {
	    a.children[0].style.width = getComputedStyle(a, '').width
	  }, false);
	}
	})()

}

if($('#map-1, #map-2').length){
ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
	var myMap1; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
	function init () { // функция - собиралка карты и фигни
	   var myMap = new ymaps.Map("map-1", {
        center: [55.635691, 37.009368], 
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
    	});
    	myMap.behaviors.disable('scrollZoom', 'drag'); 

    	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            // hintContent: 'Собственный значок метки',
            // balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [43, 45],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            
        })


    	
	    var myMap2 = new ymaps.Map("map-2", {
	        center: [55.656473, 37.256728], 
	        zoom: 14,
	        controls: ['geolocationControl', 'zoomControl']
	    });
	    myMap2.behaviors.disable('scrollZoom', 'drag'); 
	    myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
            // hintContent: 'Собственный значок метки',
            // balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [43, 45],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            
        })

		/* Добавляем метки на карту */
		myMap.geoObjects.add(myPlacemark);
		myMap2.geoObjects.add(myPlacemark2);
	}
    



}
/*
  Theme Name: Corine- Personal Portfolio Template
  Author: ThemexHunter
  Description: Multi header Personal template.
  Version: 1.0
*/

/* JS Index
-----------------------------------
1. preloader
2. Type Text
3. Tilt js
4. Service slider
5. Banner slider
6. Progress Bar
7. Cercle Progress Bar
8. Portfolio filter
9. counter Up 
10. Hide navigation
11. Search model
*/

!function(e) {
    "use strict";
    e((function() {
        e(document).on("click", "[data-lightbox]", lity.options("template", '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>')), e('.nav-bar .nav-menu .nav-link[href^="#"]').each((function() {
            e(this).animatedModal( {
                animatedIn:"fadeIn", animatedOut:"fadeOut", animationDuration:"0s", beforeOpen:function() {
                    e("#overlay-effect").addClass("animate-down").removeClass("animate-up"), e("#"+this.modalTarget).css( {
                        animationDelay: ".5s", animationFillMode:"both"
                    }
                    )
                }
                , afterOpen:function() {
                    e("#"+this.modalTarget).css( {
                        animationFillMode: "none"
                    }
                    )
                }
                , beforeClose:function() {
                    e("#overlay-effect").addClass("animate-up").removeClass("animate-down"), e("#"+this.modalTarget).css( {
                        animationDelay: ".5s", animationFillMode:"both"
                    }
                    )
                }
                , afterClose:function() {
                    e("#"+this.modalTarget).css( {
                        animationFillMode: "none"
                    }
                    )
                }
            }
            )
        }
        )), e(".lightbox-wrapper").each((function() {
            e('.nav-bar .nav-menu .nav-link[href^="#'+this.id+'"]').length||e(this).hide()
        }
        )), 
		  
	/* Preloader */ 
	$(window).on('load', function() {
	  $('.hola').delay(2000).fadeOut('slow');
	}); 
		
	/* Type Text*/	
    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }
    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('UI/UX Designer.').pauseFor(2000).deleteAll()
            .typeString('Web Developer.').pauseFor(2000).deleteAll()
            .typeString('Wordpress Developer.').start();
    }

	/* TILT JS */	
		const tilt = $('.js-tilt').tilt()
		tilt.on('change', function(e, transforms){
			
		});
		$('.img-tilt').tilt({
			maxTilt: 3,
			glare: false,
			maxGlare: .9,
			reverse: true
		});

		/* SERVICE SLIDER */
		var swiper = new Swiper('.service-slider', {
		  slidesPerView: '3',
		  spaceBetween: 30,
		  autoplay:true,
		  allowTouchMove:true,
		  speed:300,
		  loop: true,
		  keyboard: { 
		    enabled: true,
		    onlyInViewport: true 
		  }, 
		  autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		  },
		   breakpoints: {  
			0:{
				slidesPerView: 1,
			},
			767:{
				slidesPerView: 2,
			},
			1000:{
				slidesPerView: 3,
			}
		  },
		});
		
		/* BANNER SLIDER */
		var swiper = new Swiper('.banner-slider', {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
			loop: true,
			speed:500,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
			autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		  },
        });
			
	/* Progress Bar */ 
	$(document).ready(function(){
		$('.bar1').barfiller({duration: 3000 });
		$('.bar2').barfiller({duration: 3000 });
		$('.bar3').barfiller({duration: 3000 });
		$('.bar4').barfiller({duration: 3000 });
		$('.bar5').barfiller({duration: 3000 });
		$('.bar6').barfiller({duration: 3000 });
		$('.bar7').barfiller({duration: 3000 });
	});
	
	/* circle progressBar */	
	/*
   * Example 2:
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */	
	var progressBarOptions = {
		startAngle: -1.55,
		size: 140,
		value: 0.75,
		emptyFill:'rgba(25, 25, 25, 1)',
		fill: {
			color: '#f7e626'
		}
	}

	$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
		$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
	});

	$('#circle-b').circleProgress({
		value : 0.66,
		emptyFill:'rgba(25, 25, 25, 1)',
		fill: {
			color: '#f7e626'
		}
	});

	$('#circle-c').circleProgress({
		value : 0.60,
		emptyFill:'rgba(25, 25, 25, 1)',
		fill: {
			color: '#f7e626'
		}
	});	
	
	$('#circle-d').circleProgress({
		value : 0.85,
		emptyFill:'rgba(25, 25, 25, 1)',		
		fill: {
			color: '#f7e626'
		}
	});	

	/* portfolio-area */
    $('.portfolio-area').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

     var $grid = $('.grid.filter').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    });
	//for filter menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});	
	
	/* counter Up */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	}); 			
	
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch-btn').on('click', function() {
		if(localStorage.getItem("navMenu") == null) {
			localStorage.setItem("navMenu", "show");
			$('.main-menu').slideDown(400);
		} else if(localStorage.getItem("navMenu") == "show") {
			localStorage.removeItem("navMenu");
			$('.main-menu').slideUp(400);
		}
	});

	if(localStorage.getItem("navMenu") == "show") {
		$('.main-menu').slideDown(400);
	}

	/*------------------
		Search model
	--------------------*/
	$('.search-btn').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});
	
	/* overlay menu */
	$('#toggle').click(function() {
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');
	 });
	
	/* slide menu */
	$('#slide-toggle').click(function() {
	   $(this).toggleClass('active');
	   $('#side-nav').toggleClass('open');
	 });
	
	/* mobile menu */
	$('#menuToggle').click(function() {
	   $(this).toggleClass('active');
	   $('#mobile-menu').toggleClass('open');
	 });	
			
		
}
    ))
}

(jQuery);
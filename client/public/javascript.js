$(window).on("load",function() {

    $(window).scroll(function() {
    const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        if (window.innerWidth > 411) {

            if ($(this).scrollTop() > 400) {
            	$(".navbar").addClass("fadeIn");
            } else {
            	$(".navbar").removeClass("fadeIn")
            }

            $(".component-holder").each(function() {
              /* Check the location of each desired element */
              const objectBottom = $(this).offset().top + $(this).outerHeight() - 120;
              
              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {	
                	$(this).fadeTo(300,1);
                }
              } else { 
              	//object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {
            		$(this).fadeTo(300,0);
            	}
              }
            });
        } else {
            $(".navbar").addClass("fadeIn");
        }

    }).scroll(); //invoke scroll-handler on page-load

    $('#top').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('html, body').offset().top });
    });    

    $('#about').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('.about').offset().top - 100 });
    });

    $('#projects').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('.projects').offset().top - 100});
    });

    $('#contact').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('.contact').offset().top - 100 });
    });

});
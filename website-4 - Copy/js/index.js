// Explore Slider
$(function(){
	"use strict";	
		$("#exploreSlider").owlCarousel({
			items:4,
            autoPlay: false,
            navigation: true,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 4],
            itemsTablet: [768, 2],
			itemsTabletSmall: false,
			itemsMobile: [500, 1],
            itemsMobileSmall: [479, 1],
            pagination: false,
			autoHeight: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});	
});

/*------ slider------*/
$(function(){
	"use strict";	
	$("#slider").owlCarousel({
		slideSpeed : 500,
		autoPlay: true,
		paginationSpeed : 1000,
		singleItem: true,
		navigation: false,
        pagination: true,
        items : 1,
        autoplayHoverPause:true
	});	
});


(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        }); 
    });
})(jQuery);




function _class(name){
    return document.getElementsByClassName(name);
  }
   
  let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
   
  for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
      _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");
      
      _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
      
      _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
      _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      
    });
  }
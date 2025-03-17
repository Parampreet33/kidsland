(function() {
	"use strict";
 
	$(document).ready(function() {

		$('#cl_partners_logo_carousel').owlCarousel( {
			loop: true,
			margin: 10,
			nav: false,
			dots: false,
			touchDrag: true,
			mouseDrag: false,
			smartSpeed: 300,
			autoplaySpeed: 900,
			autoplayTimeout: 1500,
			autoplay: true,
			responsive: {
				0: {
					items: 3
				},
				640: {
					items: 4
				},
				991: {
					items: 6
				},
				1366: {
					items: 8
				}
			}
		});

		$("#p_c_carousel").owlCarousel( {
			loop: true,
			margin: 10,
			nav: true,
			navText: ["<img src='asset/icon/backward.svg'>","<img src='asset/icon/forward.svg'>"],
			dots: false,
			responsive: {
				0: {
					items: 1,
					dots: true,
					nav: false,
					margin: 0,
				},
				480: {
					items: 2,
					dots: true,
					nav: false
				},
				768: {
					items: 3
				},
				991: {
					items: 5
				},
				1366: {
					items: 6
				}
			}
		});

		$("#b_s_p_carousel").owlCarousel( {
			loop: true,
			margin: 10,
			nav: true,
			navText: ["<img src='asset/icon/backward.svg'>","<img src='asset/icon/forward.svg'>"],
			dots: false,
			responsive: {
				0: {
					items: 1,
					dots: true,
					nav: false,
					margin: 0,
				},
				480: {
					items: 2
				},
				991: {
					items: 3
				},
				1366: {
					items: 4
				}
			}
		});
		
		$(".ftr_links_col h4").click(function() {
			$(this).toggleClass("ftr_link_hed_act");
			$(this).next().slideToggle().toggleClass("ftr_link_ul_act");
		});

		$(".ham_burger_menu").click(function() {
			$(this).toggleClass("act_menu_icon");
			$("nav").toggleClass("ham_nav_active");
		});
		
    });
})();
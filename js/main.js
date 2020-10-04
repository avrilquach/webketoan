$(document).ready(function() {
	var section1 = $('.main_section1');
	section1.owlCarousel({
			loop: false,
            nav: false,
			items: 3,
			autoplay: false,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:1
						},
						1024:{
								items:2
						},
						1300:{
								items:3
						}
				}
    });
    var section3 = $('.main_section3');
	section3.owlCarousel({
			loop: false,
            nav: false,
			items: 3,
			autoplay: false,
            smartSpeed: 200,
            dots: true,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:1
						},
						1024:{
								items:2
						},
						1300:{
								items:3
						}
				}
    });
    var section5 = $('.main_section5');
	section5.owlCarousel({
			loop: true,
            nav: false,
			items: 3,
			autoplay: true,
			smartSpeed: 200,
			responsiveClass:true,
				responsive:{
						0:{
								items:1
						},
						768:{
								items:1
						},
						1024:{
								items:2
						},
						1300:{
								items:3
						}
				}
		});
		$(".bang_gia .sidebar ul li").click(function(e){
			$(this).toggleClass("active");
		})
});
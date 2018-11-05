// Main
$('.slider').owlCarousel({
	nav:true,
	autoplay:true,
	dots:false,
	navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    responsive:{
		0:{
			items:1,
		},
        600:{
			items:1,
			nav:false,
			dots:true
        },
        1000:{
			items:1,
			nav:false,
			dots:true
        }
    }
})

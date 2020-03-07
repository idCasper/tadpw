$(window).scroll(function(){
	if ($(this).scrollTop() > 0) {
		console.log($(this).scrollTop());
		$('.my-header').addClass('sticky');
	} else {
		$('.my-header').removeClass('sticky');
	}
});

$('#section-2 .container .btn').on('click', function(e) {
	$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + 23
		}, 1000, "easeInOutExpo");
	e.preventDefault();
});

// Swiper
$(document).ready(function () {
  var mySwipers2 = new Swiper ('#section-2 .swiper-container', {
    direction: 'horizontal',
    speed: 600,
    loop: true,
    autoplay: {
    	delay: 5000,
    	disableOnInteraction: false,
  	},
  })
});

$(document).ready(function () {
  var mySwipers2 = new Swiper ('#section-3 .swiper-container', {
    direction: 'vertical',
    speed: 600,
    loop: true,
    autoplay: {
    	delay: 5000,
    	disableOnInteraction: false,
  	},
  })
});
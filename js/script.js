$(document).ready(function(){
  $(".slider").owlCarousel({
		items:1,
		loop:true,
		dots:false,
		smartSpeed:1000,
		nav:true,
		navText: [
			'<span >previous</span>',
			'<span > / next</span>'
		],
		
	});
});

// //Запуск и остановка видео
// $(function(){

// 	$("#video__play").click(function(){
// 		let dataYoutube = $(this).parents('.video__poster').attr('data-youtube');
// 		$(this).parents('.video__poster').html('<iframe  width="499" height="315"  src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
// 	});
	

// });






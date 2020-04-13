



// init Isotope
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid .col-md-4',
  percentPosition: true,

  
});
// filter items on button click
$('.filter-button-group button').click( function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
//end isotope



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
           
        }
	
    }
})



document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.test', {
        strings: ["softwares ", " websites ", "apps "],
        stringsElement: null,
		// typing speed
		typeSpeed: 60,
		// time before typing starts
		startDelay: 600,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
      });
  });









 new WOW().init();






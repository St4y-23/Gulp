$(window).on('load', function () {

  // var tl = gsap.timeline({ defaults: { duration: .6 } });
  //     tl.to(".preloader__bg", { delay: 1, width: '100%' })
  //       .to(".preloader__bg", { x: '100%'})
  //       .to("#preloader", { x: '100%'}, "-=.7")
        

});


$(function () {

  // Slider

  // var swiper3 = new Swiper(".slider", {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     "0": {
  //       slidesPerView: 1,
  //       spaceBetween: 15
  //     },
  //     "651": {
  //       slidesPerView: 2,
  //       spaceBetween: 15
  //     },
  //     "1024": {
  //       slidesPerView: 3,
  //       spaceBetween: 15
  //     },
  //     "1441": {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     },
  //   }
  // });



  // Burger menu

  // $('.ham').on('click', function () {
  //   $('.header__menu').toggleClass('active')
  //   $('body').toggleClass('active')
  // });


  // Fixed menu

  // let header = $("#header");
  // let headerH = header.innerHeight();
  // let scrollPos = $(window).scrollTop();
  // checkScroll(scrollPos, headerH);

  // $(window).on("scroll resize", function () {
  //   headerH = header.innerHeight();
  //   scrollPos = $(this).scrollTop();
  //   checkScroll(scrollPos, headerH);
  // });

  // function checkScroll(scrollPos, headerH) {
  //   if (scrollPos > headerH) {
  //     header.addClass("active");
  //   } else {
  //     header.removeClass("active");
  //   }
  // };

  // Scroll menu nav

  // $("[data-scroll]").on("click", function (event) {
  //   event.preventDefault();
  //   let elementID = $(this).data("scroll");
  //   let elementOffset = $(elementID).offset().top;

  //   if (window.matchMedia("(min-width: 1025px)").matches) {

  //     $('.ham').toggleClass('active')
  //     $('.header__menu').toggleClass('active')
      
  //   } else {

  //     $('.ham').toggleClass('active')
  //     $('.header__menu').toggleClass('active')
  //     $('body').toggleClass('active')
  
  //   }


  //   $("html, body").animate({
  //     scrollTop: elementOffset - 75
  //   }, 700);
  // });


  // ScrollReveal

  // var slideUp = {
	// 	delay: 100,
	// 	useDelay: 'once',
	// 	duration: 500,
	// 	reset: false,
	// 	interval: 100,
	// 	distance: '20px',
	// 	easing: 'cubic-bezier(.15,0,.32,1.01)',
	// 	viewOffset: {
	// 		bottom: 50
	// 	}
	// }


  // var scrollBox = [
	// 	document.querySelector('.about__image-box'),
	// ];
  

  // var shadow = document.querySelectorAll('.shadow');


  // var scrollAnim = document.querySelectorAll('.scrollAnim');
  

  // ScrollReveal().reveal(scrollBox, slideUp);

  // ScrollReveal().reveal(shadow, slideUp);
 
  // ScrollReveal().reveal(scrollAnim, slideUp);



});
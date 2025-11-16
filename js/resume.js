(function($) {
  "use strict"; // Start of use strict

  // Cache DOM elements
  const $body = $('body');
  const $navbarCollapse = $('.navbar-collapse');
  const $scrollTriggers = $('a.js-scroll-trigger[href*="#"]:not([href="#"])');

  // Smooth scrolling using jQuery easing
  $scrollTriggers.on('click', function(e) {
    const pathname = location.pathname.replace(/^\//, '');
    const hostname = location.hostname;
    const targetPathname = this.pathname.replace(/^\//, '');
    const targetHostname = this.hostname;

    if (pathname === targetPathname && hostname === targetHostname) {
      const target = $(this.hash);
      const targetElement = target.length ? target : $(`[name=${this.hash.slice(1)}]`);

      if (targetElement.length) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: targetElement.offset().top
        }, 1000, "easeInOutExpo");
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function() {
    $navbarCollapse.collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $body.scrollspy({
    target: '#sideNav',
    offset: 80 // Add offset to improve scroll detection
  });

  // Add debounced scroll event for better performance
  let scrollTimeout;
  $(window).on('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
      // Update scrollspy
      $body.scrollspy('refresh');
    });
  });

})(jQuery); // End of use strict

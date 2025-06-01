(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });






  

})(jQuery);





  // 1. Create an array of portfolio items:
  const portfolioData = [
    {
      imgSrc: "img/portfolio/app1.png",
      title: "VALERIA",
      category: "In Production",
      filterClass: "filter-PC",
      delay: 0,              // wow-delay in seconds (0, 0.1, 0.2, etc.)
      detailLink: "#"
    },
    {
      imgSrc: "img/portfolio/web1.png",
      title: "StarShip Stride",
      category: "Web",
      filterClass: "filter-WEB",
      delay: 0.1,
      detailLink: "#"
    },
    {
      imgSrc: "img/portfolio/app2.png",
      title: "VALERIA",
      category: "AIn Productionpp",
      filterClass: "filter-PC",
      delay: 0.2,
      detailLink: "#"
    },
 
    {
      imgSrc: "img/portfolio/app3.png",
      title: "VALERIA",
      category: "In Production",
      filterClass: "filter-PC",
      delay: 0.2,
      detailLink: "#"
    },
    {
      imgSrc: "img/portfolio/app3.png",
      title: "VALERIA",
      category: "In Production",
      filterClass: "filter-PC",
      delay: 0.2,
      detailLink: "#"
    },
    {
      imgSrc: "img/portfolio/app3.png",
      title: "VALERIA",
      category: "In Production",
      filterClass: "filter-PC",
      delay: 0.2,
      detailLink: "#"
    },
    {
      imgSrc: "img/portfolio/card1.jpg",
      title: "AR VR",
      category: "AR-VR",
      filterClass: "filter-AR-VR",
      delay: 0,
      detailLink: "#"
    },


    // → Add more items here as needed...
  ];

  // 2. Once the DOM is ready, insert each item into the container
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".portfolio-container");
    if (!container) return;

    portfolioData.forEach(item => {
      const col = document.createElement("div");
      col.className = `col-lg-4 col-md-6 portfolio-item ${item.filterClass}`;
      if (item.delay) {
        col.setAttribute("data-wow-delay", `${item.delay}s`);
      }

      col.innerHTML = `
        <div class="portfolio-wrap">
          <img src="${item.imgSrc}" class="img-fluid" alt="${item.title}">
          <div class="portfolio-info">
            <h4><a href="#">${item.title}</a></h4>
            <p>${item.category}</p>
            <div>
              <a href="${item.imgSrc}" data-lightbox="portfolio" data-title="${item.title}" class="link-preview" title="Preview">
                <i class="ion ion-eye"></i>
              </a>
              <a href="${item.detailLink}" class="link-details" title="More Details">
                <i class="ion ion-android-open"></i>
              </a>
            </div>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  });


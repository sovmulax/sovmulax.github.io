/*!
 * Modern Landing Page — Géoffroy Evane
 * JS Controller (remplace corine-main.js pour la landing page)
 */

(function ($) {
  'use strict';

  $(function () {

    // =============================================
    // PRELOADER
    // =============================================
    $(window).on('load', function () {
      $('#preloader').fadeOut(600);
    });

    // =============================================
    // NAVBAR — Scroll & Hamburger
    // =============================================
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 60) {
        $('#navbar').addClass('scrolled');
      } else {
        $('#navbar').removeClass('scrolled');
      }
    });

    $('#hamburger').on('click', function () {
      $(this).toggleClass('active');
      $('#navMenu').toggleClass('open');
    });

    // Fermer le menu mobile en cliquant sur un lien
    $('.lp-nav-menu a').on('click', function () {
      $('#hamburger').removeClass('active');
      $('#navMenu').removeClass('open');
    });

    // Fermer sur clic en dehors
    $(document).on('click', function (e) {
      if (!$(e.target).closest('#navbar').length) {
        $('#hamburger').removeClass('active');
        $('#navMenu').removeClass('open');
      }
    });

    // =============================================
    // SMOOTH SCROLL (avec offset pour navbar fixe)
    // =============================================
    $('a[href^="#"]').on('click', function (e) {
      var href = $(this).attr('href');
      if (href.length > 1 && $(href).length) {
        e.preventDefault();
        var offset = $(href).offset().top - 72;
        $('html, body').animate({ scrollTop: offset }, 650, 'swing');
      }
    });

    // =============================================
    // NAV ACTIVE LINK — mise en évidence au scroll
    // =============================================
    var navSections = ['home', 'about', 'services', 'resume', 'portfolio', 'certificates', 'contact'];

    $(window).on('scroll', function () {
      var scrollTop = $(this).scrollTop() + 100;
      navSections.forEach(function (id) {
        var $el = $('#' + id);
        if ($el.length) {
          var top = $el.offset().top;
          var bottom = top + $el.outerHeight();
          if (scrollTop >= top && scrollTop < bottom) {
            $('.lp-nav-menu a').removeClass('active');
            $('.lp-nav-menu a[href="#' + id + '"]').addClass('active');
          }
        }
      });
    });

    // =============================================
    // BACK TO TOP
    // =============================================
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 400) {
        $('#backTop').addClass('visible');
      } else {
        $('#backTop').removeClass('visible');
      }
    });

    // =============================================
    // TYPEWRITER — Hero subtitle
    // =============================================
    if ($('#personal').length) {
      var el = document.getElementById('personal');
      var tw = new Typewriter(el, { loop: true, cursor: '_' });
      tw
        .typeString('Développeur Web.')
        .pauseFor(2200)
        .deleteAll()
        .typeString('Développeur Mobile.')
        .pauseFor(2200)
        .deleteAll()
        .typeString('AI Engineer.')
        .pauseFor(2200)
        .deleteAll()
        .typeString('UI/UX Designer.')
        .pauseFor(2200)
        .deleteAll()
        .start();
    }

    // =============================================
    // COUNTER — Stats du hero (waypoints + counterup)
    // =============================================
    if ($('.lp-stat-num').length) {
      $('.lp-stat-num').counterUp({ delay: 10, time: 1600 });
    }

    // =============================================
    // SKILL BARS — Animation IntersectionObserver
    // =============================================
    var $skillsContainer = document.querySelector('.lp-skills-bars');
    if ($skillsContainer) {
      var skillObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            $(entry.target).find('.lp-skill-fill').each(function () {
              var pct = $(this).data('width');
              $(this).css('width', pct + '%');
            });
            skillObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35 });

      skillObserver.observe($skillsContainer);
    }

    // =============================================
    // PORTFOLIO FILTER — Simple show/hide
    // =============================================
    $('.lp-filter-btn').on('click', function () {
      $('.lp-filter-btn').removeClass('active');
      $(this).addClass('active');
      var filter = $(this).data('filter');

      var $items = $('.lp-portfolio-row .grid-item');

      if (filter === '*') {
        $items.fadeIn(280);
      } else {
        var cls = filter.replace('.', '');
        $items.each(function () {
          if ($(this).hasClass(cls)) {
            $(this).fadeIn(280);
          } else {
            $(this).fadeOut(200);
          }
        });
      }
    });

    // =============================================
    // CONTACT FORM — Feedback message
    // =============================================
    $('.lp-contact-form').on('submit', function () {
      $(this).find('[type="submit"]').prop('disabled', true).text('Envoi...');
    });

  });

})(jQuery);

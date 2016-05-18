/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
function setupDynamicSite() {
  'use strict';

  if ($('html').hasClass('static-site')) {
    return;
  }

  if (!$('html').hasClass('svg')) { // Fallback to static site if SVG is not supported
    $('html').removeClass('dynamic-site');
    $('html').addClass('static-site');
    return;
  }

  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five'];
  var tooltips = ['Pomodrone', 'Color Themes', 'Stats', 'Daily Goal', 'People ♥︎ Pomodrone'];

  var $pageFooter = $('.js-page-footer');
  var $slides = $(".js-slides");
  var $colorCards = $('.js-colors');
  var $iPhone = $('.js-iphone');
  var $iPhoneOverlay = $('.js-iphone-overlay');
  var $reviewsSwipe = $(".js-reviews-swipe");
  var $reviewsNextButton = $(".js-reviews-next");
  var $reviewsPrevButton = $(".js-reviews-prev");
  var $fullpageNavigation = $("#fp-nav");

  $slides.fullpage({
    verticalCentered  : false,
    css3              : true,
    navigation        : true,
    navigationPosition: 'right',
    navigationTooltips: tooltips,

    afterRender: function() {
      $fullpageNavigation = $("#fp-nav");
    },

    onLeave: function(index, nextIndex) {
      $slides.removeClass(numbers[index]);
      $slides.addClass(numbers[nextIndex]);
      $iPhone.attr('class', 'iphone__viewbox js-iphone ' + numbers[nextIndex]); // jQuery addClass and removeClass don't work with SVG
      $pageFooter.toggleClass('visible', nextIndex === tooltips.length);
      $fullpageNavigation.toggleClass('hidden', nextIndex === tooltips.length);
      $colorCards.attr('class', 'colors js-colors ' + (nextIndex === 2 ? 'visible' : ''));
      $iPhoneOverlay.toggleClass('send-to-back', nextIndex === tooltips.length);
    },
  });

  var swipe = new Swipe($reviewsSwipe[0], {
    continuous: true,
  });

  $reviewsNextButton.click(function() {
    swipe.next();
  });

  $reviewsPrevButton.click(function() {
    swipe.prev();
  });
}

setupDynamicSite();

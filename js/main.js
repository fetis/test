/**
 * Created by fetis on 29.04.2016.
 */

'use strict';

$(function() {
  var demo = $('.js-demo-table').html();
  for (var i=0; i<4; i++) {
    demo += demo;
  }
  $('.js-demo-table').html(demo);

  $('.js-search').click(function() {
    $('.js-panel-form').toggleClass('hidden');
  })
});
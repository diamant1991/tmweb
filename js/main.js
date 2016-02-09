$('#main-slider').bxSlider({
  mode: 'fade',
  controls: false
});

$('#catalog-slider').bxSlider({
  pagerCustom: '#bx-pager',
  mode: 'fade',
  controls: false
});

$(document).ready(function() {
  $("a").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top - 110 + 'px';
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  });
});

$('.select-img').click(function(e) {
  var select = $(this).parent();
  if (!select.hasClass('active'))
    select.addClass('active');
  else
    select.removeClass('active');
});

$('.overlay').click(function(e) {
  var select = $(this).parent();
  if (!select.hasClass('active'))
    select.addClass('active');
  else
    select.removeClass('active');
});
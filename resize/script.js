$(window).resize(function() {
  
  $('.button').remove();

  for (var increment = 0; increment < 100; increment++) {
    $("body").append('<div class="button"></div>');
  }
  
  $(".button").each(function() {
    var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
    var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
    $(this).css("top",topPosition).css("left",leftPosition);
    var newSize = Math.floor(Math.random()*300) + "px";
    $(this).css("width",newSize).css("height",newSize);
  });
  
});


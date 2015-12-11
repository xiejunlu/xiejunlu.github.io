

$(".change").click(function() {
  make_circles_dance();
});

function make_circles_dance() {
  $(".button").each(function() {
    var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
    var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
    $(this).css("top",topPosition).css("left",leftPosition);
    var newSize = Math.floor(Math.random()*106) + "px";
    $(this).css("width",newSize).css("height",newSize);
  });
}

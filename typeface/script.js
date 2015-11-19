$(document).ready(function(){
    setTimeout(function(){$("#first").hide();},6000);
});




$(function() {
    $(".draggable").draggable();
    $(".box").mousedown(function(e) {
      console.log(e.toElement);
        $(".audio1").trigger('play');
        $('.box').append("<div class=\"" + e.toElement.classList[0] + " draggable\"> </div>");
        $(e.toElement).addClass("dragged");
        $(".draggable").draggable();
    });
    $(".clear").click(function() {
        $(".audio3").trigger('play');
        $(".dragged").remove();
        $(".canvas").css("background-image", "url(canvasbg.jpg");
    });
});

$(".inspire").click(function() {
  var randomNum = Math.floor(Math.random() * 8);
  console.log(randomNum);
  $(".audio2").trigger('play');
  $(".canvas").css("background-image", "url(bg" + randomNum + ".png");
});

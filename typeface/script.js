
$(function() {
    $(".draggable").draggable();
    $(".box").mousedown(function(e) {
      console.log(e.toElement)
        $('.box').append("<div class=\"" + e.toElement.classList[0] + " draggable\"> </div>");
        $(e.toElement).addClass("dragged");
        $(".draggable").draggable();
    });
    $(".clear").click(function() {
        $(".dragged").remove();
        $(".canvas").css("background-image", "url(canvasbg.jpg");
    });
});

$(".inspire").click(function() {
  var randomNum = Math.floor(Math.random() * 4);
  console.log(randomNum);
  $(".canvas").css("background-image", "url(bg" + randomNum + ".png");
});


$(function() {
    $(".draggable").draggable();
    
    
    $(".shape").mousedown(function(e) {
        console.log('hi');
        $(e.toElement).addClass("dragged");
        $('.shape').append("<div class=\"" + e.toElement.classList[0] + " draggable\"> </div>");
        $(".draggable").draggable();
    });
    
    
    $(".clear").click(function() {
        $(".dragged").remove();
    });
});

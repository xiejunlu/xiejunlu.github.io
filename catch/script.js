var mouse_started = false;


$(window).mousemove(function(event) {
        var newTop = (event.clientY-50)+"px";
        var newLeft = (event.clientX-50)+"px";
        $(".cat").css("top",newTop);
        $(".cat").css("left",newLeft);
        $(".audio").trigger('play');
        if(mouse_started == false){
            animateDiv();
            mouse_started = true;
        }
});



$(document).ready(function(){
    
    

});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50; // replace 50 with half the mouse's height
    var w = $(window).width() - 50; // " " mouse's width
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw]; // 0, 1   
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.mouse').animate({ top: newq[0], left: newq[1] }, 2000, function(){
      animateDiv();        
    });
    
};


// Collision detection.
var did_collide = false;
setInterval(function(){
    
    // Use parseInt to remove the 'px' and make the values Numbers.
    var cat_x = parseInt($('.cat').css('left'));
    var cat_y = parseInt($('.cat').css('top'));
    var mouse_x = parseInt($(".mouse").css('left'));
    var mouse_y = parseInt($(".mouse").css("top"));
    var randomNum = Math.floor(Math.random() * 4);
   
    
    //console.log("Cat", cat_x, cat_y, "Mouse", mouse_x, mouse_y);
    
    
    var distance = Math.hypot(cat_x-mouse_x, cat_y-mouse_y);
    
    if(distance < 80 && did_collide == false){
        console.warn("Hit!");
        $(".cat").css("background-image","url(cat2.gif)");
        $("body").css("background-image","url(bg" + randomNum + ".gif");
        $(".mouse").css("background-image","none");
        did_collide = true;
    }
    
    if(distance > 80 && did_collide){
        did_collide = false;
        $(".mouse").css("background-image","url(mouse2.gif)");
        $(".cat").css("background-image","url(cat1.gif)");
        $("body").css("background-image","none");
        console.warn('ready to hit again');
        
    }
    
    // x, and y of the cat
    // x, and y of the mouse
    
    
}, 16);

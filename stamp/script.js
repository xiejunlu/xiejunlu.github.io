var surf = document.getElementById("surface");
var ctx = surf.getContext("2d");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");

var stamp = function(img, x, y, w, h){
     ctx.drawImage(img, x-w/2, y-h/2, w, h);
};


$("body").click(function() {
     console.log(1);
     var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      $("body").css("background-color",newColor);
});

function fadeOut() {
    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.fillRect(0, 0, 500, 500);
    setTimeout(fadeOut,6000);
}  

$("#surface").mousemove(function(e) {  
    stamp(h2, e.offsetX-50, e.offsetY-50, 90, 50);
    var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    fadeOut();
});

$("#surface").click(function(e) {
     console.log(2);
     ctx.clearRect(0, 0, 500, 500);
     stamp(h1, e.offsetX-50, e.offsetY-50, 50, 50);
     var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
     $("canvas").css("background-color",newColor);
    
});

 


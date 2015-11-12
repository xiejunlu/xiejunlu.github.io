
var surf = document.getElementById("surface");
var smile = document.getElementById("smile");
var ctx = surf.getContext("2d");
//ctx.fillStyle = "#FF9789"; 
//ctx.fillRect(0, 0, surf.width, surf.height);


var stamp_smile = function(img, x, y, w, h){
  ctx.drawImage(img, x-w/2, y-h/2, w, h);
};


var make_line = function(color, x, y, lx, ly, thickness){
  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;
  ctx.beginPath();
  ctx.moveTo(lx, ly);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke(); 
};


var stamp_num = 1;
var smile_btn = document.getElementById("stamp-one");
var line_btn = document.getElementById("stamp-two");
//var new_btn = ...;

var clear_active = function(){
    smile_btn.className = "";
    line_btn.className = "";
    //new_btn.className = "";
}

smile_btn.onclick = function(){
      stamp_num = 1;
      clear_active();
      smile_btn.className = "active-stamp";
    };

line_btn.onclick = function(){
      stamp_num = 2;
      clear_active();
      line_btn.className = "active-stamp";
};

/*
new_btn.onclick = function(){
      stamp_num = 3;
      clear_active();
      new_btn.className = "active-stamp";
};
*/
    
    
    
var last_x;
var last_y;

surf.onclick = function(e){
      if(stamp_num == 1){
        stamp_smile(smile, e.offsetX, e.offsetY, 100, 100);
     } else if (stamp_num == 3){
          // new_btn
      }
};
      
      
surf.onmousemove = function(e){
    if(stamp_num == 2){
          // var make_line = function(color, x, y, lx, ly, thickness)
          make_line("rgba(255, 160, 0, 0.8)", e.offsetX, e.offsetY, last_x, last_y, 8);
          last_x = e.offsetX;
          last_y = e.offsetY;
    
}
};
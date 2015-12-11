
var surf = document.getElementById("surface");
var smile = document.getElementById("smile");
var cat = document.getElementById("cat");
var flower = document.getElementById("flower");
var ctx = surf.getContext("2d");
//ctx.fillStyle = "#FF9789"; 
//ctx.fillRect(0, 0, surf.width, surf.height);


var stamp_smile = function(img, x, y, w, h){
  ctx.drawImage(img, x-w/2, y-h/2, w, h);
};

var stamp_cat = function(img, x, y, w, h){
  ctx.drawImage(img, x-w/2, y-h/2, w, h);
};

var stamp_flower = function(img, x, y, w, h){
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
var cat_btn = document.getElementById("stamp-three");
var black_btn = document.getElementById("stamp-four");
var flower_btn = document.getElementById("stamp-five");

var clear_active = function(){
    smile_btn.className = "";
    line_btn.className = "";
    cat_btn.className = "";
    black_btn.className = "";
    flower_btn.className = "";
};

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


cat_btn.onclick = function(){
      stamp_num = 3;
      clear_active();
      cat_btn.className = "active-stamp";
};

black_btn.onclick = function(){
      stamp_num = 4;
      clear_active();
      black_btn.className = "active-stamp";
};

flower_btn.onclick = function(){
      stamp_num = 5;
      clear_active();
      flower_btn.className = "active-stamp";
};
    
    
    
var last_x;
var last_y;

surf.onclick = function(e){
     if(stamp_num == 1){
        stamp_smile(smile, e.offsetX, e.offsetY, 100, 100);
     } else if (stamp_num == 3){
         stamp_cat(cat, e.offsetX, e.offsetY, 300, 300);
      } else if(stamp_num == 4){
          make_line("rgba(0, 0, 0, 1)", e.offsetX, e.offsetY, last_x, last_y, 10);
          last_x = e.offsetX;
          last_y = e.offsetY;
      }
};


var is_drawing = false;

var last_x_green;
var last_y_green;
      
surf.onmousedown = function(e){
  is_drawing = true;  
  last_x_green = e.offsetX;
  last_y_green = e.offsetY;
};

surf.onmouseup = function(){
    is_drawing = false;
};
      
      
surf.onmousemove = function(e){
    if(is_drawing){
        if(stamp_num == 2){
              // var make_line = function(color, x, y, lx, ly, thickness)
              make_line("rgba(125, 160, 20, 0.8)", e.offsetX, e.offsetY, last_x_green, last_y_green, 20);
              last_x_green = e.offsetX; // offsetX is mouse position of the window offset by the canvas (surf)
              last_y_green = e.offsetY;
        } else if (stamp_num == 5){
             stamp_flower(flower, e.offsetX, e.offsetY, 30, 30);
        }
    }
};
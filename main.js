var last_pos_x, last_pos_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchStart", my_touchStart);

function my_touchStart(e){
    last_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    last_pos_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchMove", my_touchmove);
function my_touchmove(e){
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop; 
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_pos_x, last_pos_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    
    last_pos_x = current_position_of_x;
    last_pos_y = current_position_of_y;
}
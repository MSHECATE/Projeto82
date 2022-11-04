var mouseEvent = "empty";
 var lastPositionX, lastPositionY;
canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
  color = "black";
   widthLine = 1;
   canvas.addEventListener("mousedown", myMouseDown);

   function myMouseDown(e)
   { widthLine = document.getElementById("widthLine").value;
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
   mouseEvent = "mouseDown"; }

   canvas.addEventListener("mousemove", myMouseMove);
   function myMouseMove(e)
   { 
     PositionMouseX = e.clientX - canvas.offsetLeft;
     PositionMouseY = e.clientY - canvas.offsetTop;

     if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = widthLine;
        ctx.arc(PositionMouseX, PositionMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
     }
    }
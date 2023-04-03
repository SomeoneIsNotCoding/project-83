var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "teal";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
      
    

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

        var lastX,lastY;

        var width=screen.width;
        var newW=screen.width-70;
        var newH=screen.height-300;

        if(width<900){
            document.getElementById("myCanvas").width=newW;
            document.getElementById("myCanvas").height=newH;
            document.body.style.overflow="hidden";
        }

        canvas.addEventListener("touchstart",myTouchStart);
        function myTouchStart(e){
            console.log("myTouchStart");
            lastX=e.touches[0].clientX-canvas.offsetLeft;
            lastY=e.touches[0].clientY-canvas.offsetTop;

        }
        

        canvas.addEventListener("touchmove",myTouchMove);
        function myTouchMove(e){
            console.log("myTouchmove");
            currentX=e.touches[0].clientX-canvas.offsetLeft;
            currentY=e.touches[0].clientY-canvas.offsetTop;
            
            ctx.beginPath();
            ctx.strokeStyle="teal";
            ctx.lineWidth=777;
            ctx.moveTo(lastX,lastY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();

            lastX=currentX;
            lastY=currentY  

            


        }
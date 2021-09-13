
/* Polygon swap functionality*/
/*$(document).ready(function () */
$(function()
        {
            $("#swap_blue").click(function () {
                $("#polygon").get(0).style.setProperty("fill", "blue");
            });
  
            $("#swap_lime").click(function () {
                $("#polygon").get(0).style.setProperty("fill", "lime");
            });
        });

/* Reveal/hide answers functionality */
$(function()    
        {
            $(".button1").click(function(){
                $("#answers").slideToggle();
            });
        });


/* What face */
window.onload = function () {
        var canvas = document.getElementById("whatFace");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
          whatFace.width = whatFace.height = 300;

          /* Main circle */
          ctx.beginPath();
          ctx.arc(150, 150, 90, 0, 2 * Math.PI, false);
          ctx.closePath();
          ctx.fillStyle = "red";
          ctx.stroke();
          ctx.fill();

          /* Left eyeball */

          ctx.beginPath();
          ctx.arc(130, 130, 25, 0, 2 * Math.PI, false);
          ctx.closePath();
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.stroke();
          ctx.fill();

          /* Left eye */

          ctx.beginPath();
          ctx.arc(143, 133, 10, 0, 2 * Math.PI, false);
          ctx.closePath();
          ctx.fillStyle = "rgb(0, 0, 255)";
          ctx.stroke();
          ctx.fill();

          /* Right eyeball */

          ctx.beginPath();
          ctx.arc(175, 130, 25, 0, 2 * Math.PI, false);
          ctx.closePath();
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.stroke();
          ctx.fill();

          /* Right eye */
          ctx.beginPath();
          ctx.arc(183, 133, 10, 0, 2 * Math.PI, false);
          ctx.closePath();
          ctx.fillStyle = "rgb(0, 0, 255)";
          ctx.stroke();
          ctx.fill();

          /* Mouth */
          ctx.beginPath();
          ctx.arc(155, 165, 60, 0, 2, false);
          ctx.closePath();
          ctx.lineWidth = 5;
          ctx.strokeStyle = "rgb(255, 255, 0)";
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.stroke();
          ctx.fill();
        } else {
          console.log(" Your browser does not support the HTML5 canvas tag.");
        }
      };
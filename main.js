var mouseEvent = "empty";
 var last_position_of_x, last_position_of_y ;

 canvas = document.getElementById('myCanvas'); 
 ctx = canvas.getContext("2d");

 ctx.beginPath();
 ctx.strokeStyle="grey";
 ctx.linWidth=1;
 ctx.rect(150,143,430,200);
 ctx.stroke();


 ctx.beginPath();
 ctx.strokeStyle="blue";
 ctx.linWidth=8;
 ctx.arc(250,210,40,0,5 *Math.PI);
 ctx.stroke();
 

 ctx.beginPath();
 ctx.strokeStyle="black";
 ctx.linWidth=8;
 ctx.arc(350,210,40,0,5 *Math.PI);
 ctx.stroke();
 


 ctx.beginPath();
 ctx.strokeStyle="red";
 ctx.linWidth=8;
 ctx.arc(450,210,40,0,5 *Math.PI);
 ctx.stroke();
 


 ctx.beginPath();
 ctx.strokeStyle="yellow";
 ctx.linWidth=8;
 ctx.arc(300,250,40,0,2 *Math.PI);
 ctx.stroke();
 


 ctx.beginPath();
 ctx.strokeStyle="green";
 ctx.linWidth=50;
 ctx.arc(400,250,40,0,2 *Math.PI);
 ctx.stroke();
 
 

 
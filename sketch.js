var move, fix;

var speed, weight; 

function setup() {
  createCanvas(1600, 400);

  speed=random(55,90)
  
	weight=random(400,1500)
  
  move = createSprite(50, 200, 50,50);   
  move.velocityX = speed;
	move.shapeColor=color(255);
  
  	fix=createSprite(1500,200, 60, height/2)
  	fix.shapeColor=color(80,80,80)
}
function draw() {
  background(0);
  if(fix.x-move.x < (move.width+fix.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		move.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		move.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		move.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}

 



var sea;
var ship1,ship2;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
  

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  ship=createSprite(130,200,30,30)
  ship.addAnimation("moving ship",shipImg1)
  ship.scale=0.2
}

function draw() {
  background(0);
 //sea.velocityX = -3;
   sea.velocityX = -3; 
  

  
    
  drawSprites();
}

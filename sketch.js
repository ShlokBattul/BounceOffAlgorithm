var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(400,200,60,60);
  rect1.shapeColor="blue";
  rect2=createSprite(200,400,60,60);
  rect2.shapeColor="purple";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,fixedRect)
  
  drawSprites();
}


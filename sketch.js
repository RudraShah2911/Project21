var bullet, wall, thickness;
var speed; weight



function setup() {
  createCanvas(1600, 400);

  bullet = createSprite(100, 200, 30, 10);
  bullet.shapeColor = "white"
  speed = random(223, 321)
  weight = random(30, 52)
  thickness = random(22, 83)
  bullet.velocityX = speed;
  wall = createSprite(1400, 200, thickness, height / 2)
  wall.shapeColor = (80, 80, 80)
}

function draw() {
  background("black");

  if (hasCollided(bullet,wall)){
      bullet.velocityX = 0;
       var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
       if (damage>10){
         wall.shapeColor = ("red")
       }
   
        else{
         wall.shapeColor = ("green")
       }
  }
  drawSprites();
}

function hasCollided(bullet, wall) {

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    
    return true;
  }
  
  return false;
}
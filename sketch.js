


/*var vx = 0;
var g = 0.05;
var vy = 0;*/
var START = 0;
var PLAY = 1;
var END = 2;
var gameState = START;
var score = 0;
var alien,alien_img;
function preload()
{ 
  
  alien_img= loadImage("alien.png")
  ground_img = loadImage("bg.png")
  boy_img = loadImage("boy.png");
  hero_img = loadImage("hero.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  ground = createSprite(500,350);
  ground.addImage("bg",ground_img); 
  ground.x = ground.width /2;
  ground.velocityX = -3;

  boy = createSprite(30, 600);
  boy.addImage("boy", boy_img);
  boy.scale = 0.3
  boy.visible = false ;


  hero = createSprite(150,650);
  hero.addImage("hero", hero_img);
  hero.scale = 0.7
console.log(hero.x)

aliensGroup = new Group();
  rectMode(CENTER);
  

  score = 0
}

function draw() 
{
  background(61);
 
 if (gameState===PLAY){

  play();

}

else if (gameState === END){
  end();
}










  drawSprites();
  fill("blue")
  textSize(30);
  if (gameState===START){
    ground.velocityX = 0
    start();
    if(keyDown("space")){
      gameState= PLAY
    }

   }

  fill("red")
  textSize(30);

   if (gameState===PLAY){ 
    text("Score: "+ score, 200,200);
 }

 textSize(100);

 if (gameState===END){ 
  text("GAME OVER:", 200,200);
}


 
}
function spawnAlien() {
  if(frameCount % 60 === 0) {
    var alien = createSprite(80, 300);
    alien.addImage(alien_img);
    alien.y = Math.round(random(80,700));
    alien.velocityX = 5;
    alien.scale = 0.5
    alien.lifetime = 300
    aliensGroup.add(alien);
  }
}

function play (){

  score = score + Math.round(getFrameRate()/60);
  ground.velocityX = -3;
  hero.y = World.mouseY;
  hero.x = World.mouseX;
  if(score ===10000){
    boy.visible = true
  }
  spawnAlien();
  if(aliensGroup.isTouching(hero)){
    gameState = END;
  }
}


function end(){
  stroke("yellow");
  fill("yellow");
  textSize(0);
 // text("Game Over", 500,200)
  aliensGroup.setVelocityXEach(0);
  ground.velocityX = 0

}

function start() {

  text("You are the hero and you have to save the boy from the aliens.",80,300 );
  text("Move yourself with the help of the MOUSE.",80,400)
  text("Press SPACE to start the game",80,500)
}








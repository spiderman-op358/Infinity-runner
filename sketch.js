var spaceship,spaceshipImage;
var laser,laserImage,lasergroup;
var commet,commetImage,commetgroup;
var score = 0, commetdestroyed = 0;
var gameover,gameoverImage;

var PLAY;
var END;
var gameState = PLAY;


function preload(){
 spaceshipImage=loadAnimation("spaceship 3-0.png","spaceship 3-1.png","spaceship 3-2.png","spaceship 3-3.png","spaceship 3-4.png");
  laserImage=loadImage("laser.png");
  commetImage=loadImage("commet.png")
  gameoverImage = loadImage("game over.png");


}

function setup(){
  createCanvas(800,500);
  
  spaceship=createSprite(90,200);
  spaceship.addAnimation("hello",spaceshipImage);
  spaceship.scale = 0.5

  gameover = createSprite(400,250);
  gameover.addImage(gameoverImage);
  gameover.visible = false; 

  commetgroup=new Group();
  lasergroup=new Group();
}

function draw() {
  background("#34404E");

  if(gameState===PLAY){
spaceship.y=World.mouseY
  
if(keyDown("space")){
  spawnlaser();
}

if(lasergroup.isTouching(commetgroup)){
  lasergroup.destroyEach();
  commetgroup.destroyEach();
  score = score +5;
  commetdestroyed = commetdestroyed+1;
}

if(commetgroup.isTouching(spaceship)){
 gameState =END 
}




 spawncommet();

  drawSprites();
  textSize(15);
  fill("yellow");
  text("SCORE : " + score , 560,50);
  text("COMET DESTROYED : " + commetdestroyed , 560,70);
  }
  else if(gameState === END){
    gameover.visible = true;
    spaceship.destroy();
    lasergroup.destroyEach();
    commetgroup.destroyEach();
    commetgroup.setVelocityXEach(0);
    lasergroup.setVelocityXEach(0);
  
   }

  
  
   




 
}


   function spawnlaser(){
     laser=createSprite(90,200);
     laser.addImage(laserImage);
     //laser.x=spaceship.x;
     laser.y=spaceship.y
     laser.velocityX=3;
     laser.lifetime=800
     lasergroup.add(laser);
     laser.scale=0.1;
    
     


   }


   function spawncommet(){
    if(frameCount %220===0){
      commet=createSprite(800,Math.round(random(50,450)));
      commet.addImage(commetImage);
      commet.velocityX=-3;
      commet.scale=0.5; 
      commetgroup.add (commet);
      commet.lifetime=800;
      commet.debug= true;
      commet.setCollider("rectangle",10,-25,140,100)
      
    }
  
  }















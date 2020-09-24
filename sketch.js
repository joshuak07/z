var zombiei,bulleti,guni,backgrouu;
var ci,bullet;
var bulletgroup,zombiegroup,zombie;
var j;
var zombie1,zombie2,zombie3,gameover,go
var score=0;
var PLAY=1;
var END=0;
var GAMESTATE=PLAY; 
function preload(){
   zombiei=loadImage("z1.png") 
   bulleti=loadImage("bullet-26507_1280.png")
   guni=loadImage("gun_PNG1373.png");
   backgrouu=loadImage("bcak.jpg")
   ci=loadImage("soldier.png");
   zombie1=loadImage("z2.png")
   zombie2=loadImage("z3.png")
   zombie3=loadImage("z4.png")
   gameover=loadImage("goo.jpg")
}

function setup(){
createCanvas(displayWidth,displayHeight)
j=createSprite(displayWidth/2-100,displayHeight/2+100,50,50);
j.addImage(ci);
j.scale=0.4;
bulletgroup=createGroup();
zombiegroup=createGroup();

j.debug=true;
j.setCollider("rectangle",0,0,150,300)

}


function draw(){
background(backgrouu)
textSize(30)
fill("red")
text("score="+score,displayWidth-200,50)
j.x=mouseX;
j.y=mouseY;
if (GAMESTATE===PLAY){



if(keyDown("space")){
   if(frameCount%10===0){
   bullet=createSprite(mouseX,mouseY,10,10);
   bullet.addImage(bulleti)
   bullet.scale=0.03
   bullet.velocityX=2;
   bulletgroup.add(bullet);
}

}
if(frameCount%100===0){
   var ran=Math.round(random(1,4));
   zombie=createSprite(displayWidth,random(50,displayHeight-100),50,50)
   switch(ran){
      case 1:zombie.addImage(zombiei);

      break;
      case 2:zombie.addImage(zombie1);
      
      break;
      case 3:zombie.addImage(zombie2);
      break;
      case 4:zombie.addImage(zombie3);
      break; 
   }
  
   zombie.scale=0.4;
   zombie.debug=true;
   zombie.setCollider("rectangle",0,0,100,350)
   zombie.velocityX=-2;
   zombiegroup.add(zombie);
}

if(bulletgroup.isTouching(zombiegroup)){
for(var i =0;i<zombiegroup.length;i=i+1){
   if (bulletgroup.isTouching(zombiegroup[i])){
zombiegroup[i].destroy();
 score=score+2
   }
}
bulletgroup.destroyEach();
}
if(zombiegroup.isTouching(j)){
   GAMESTATE=END;
   
}
}

else
if (GAMESTATE===END){
zombiegroup.setVelocityXEach(0)
bulletgroup.setVelocityXEach(0)
gameover.createSprite
}
drawSprites();

}



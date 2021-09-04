
//adding scores to game
var player1score=0;
var player2score=0;
var carsTouching=false;
var gamestate=1;
var goal1,goal2,ball,playercar1,playercar2;
var health1,healths1;
var health2,healths2;

//adding overall text size
var edges;
function preload()
{
	ground=loadImage("sprites/background.jpg");
	goal1Img=loadImage("sprites/goal1.png");
	goal2Img=loadImage("sprites/goal2.png");
	playercar1Img=loadAnimation("sprites/car1.png");
   playercar1Imgleft=loadAnimation("sprites/cars1 (3).png");


	playercar2Img=loadAnimation("sprites/cars2.png");
   playercar2Imgright=loadAnimation("sprites/car 2.png");
   
	ballImg=loadImage("sprites/balll.png")
}
function setup()
{
	createCanvas(windowWidth,windowHeight)
	edges=createEdgeSprites()
   goal1=createSprite(70, height/2,100,20);
   goal1.addImage("goal1",goal1Img);

   goal1=createSprite(width-90, height/2,100,20);
   goal1.addImage("goal2",goal2Img);
   

   ball=createSprite(width/2,height/2,10,10);
   ball.addImage("ball",ballImg);
   ball.scale=0.2;
   //ball.debug=true;

   ball.setCollider("circle",0,0,220)

   playercar1=createSprite(120,height/2,60,10);
   playercar1.addAnimation("player1",playercar1Img);
   playercar1.addAnimation("players1",playercar1Imgleft);
   
   playercar1.scale=0.35
   //playercar1.debug=true;
   playercar1.setCollider("rectangle",0,0,500,250);

   playercar2=createSprite(width-120,height/2,60,10);
   playercar2.addAnimation("player2",playercar2Img);
   playercar2.addAnimation("players2",playercar2Imgright);
   //playercar2.debug=true;
   playercar2.scale=0.35
   playercar2.setCollider("rectangle",0,0,500,250);

   health1=createSprite(100,600,140,20);
   healths1=createSprite(100,600,140,20);
 
   health2=createSprite(1400,600,140,20);
   healths2=createSprite(1400,600,140,20);
 

}

function draw()
{
  background("green");
  playercar1.changeAnimation("player1",playercar1Img);
  playercar2.changeAnimation("player2",playercar2Img);

  health1.shapeColor="white";
  healths1.shapeColor="yellow";
 
  health2.shapeColor="white";
  healths2.shapeColor="red";
 
  if(keyDown("left"))
  {
    playercar1.x=playercar1.x-3;
    playercar1.changeAnimation("players1",playercar1Imgleft);
   
  }
   if(keyDown("right"))
   {
       playercar1.x=playercar1.x+5;
   }
   if(keyDown("up"))
   {
       playercar1.y=playercar1.y-5;
   }
   if(keyDown("down"))
   {
       playercar1.y=playercar1.y+5;
   }
 
   if(keyDown("d"))
   {
       playercar2.x=playercar2.x+5;
      playercar2.changeAnimation("players2",playercar2Imgright);
 
   }
   if(keyDown("w"))
   {
       playercar2.y=playercar2.y-5;
   }
   if(keyDown("s"))
   {
       playercar2.y=playercar2.y+5;
   }
   if(keyDown("a"))
   {
   	 playercar2.x=playercar2.x-5;
   }
   ball.bounceOff(edges);
   playercar1.collide(edges);
   playercar2.collide(edges);
   ball.collide(edges);
   ball.velocityX=ball.velocityX*0.98;
   ball.velocityY=ball.velocityY*0.98;

   if(playercar1.isTouching(ball))
   {
      ball.bounceOff(playercar1);
      ball.velocityX=(ball.x-playercar1.x)*0.03;
      ball.velocityY=(ball.y-playercar1.y)*0.03;
      //console.log(ball.velocityX);
      //console.log(ball.velocityY);
      //ball.setVelocity(1,1);
   }

   if(playercar2.isTouching(ball))
   {
      ball.bounceOff(playercar2);
      ball.velocityX=(ball.x-playercar2.x)*0.03;
      ball.velocityY=(ball.y-playercar2.y)*0.03;
      //ball.setVelocity(-1,-1);
   }
 
   if(playercar1.isTouching(playercar2))
   {
      if(!carsTouching)
      {
      playercar1.bounceOff(playercar2)
      if(healths1.width>0)
      {
      healths1.width=healths1.width-20;
      healths1.x=healths1.x-10;
      if(healths1.width===0)
      {
         healths1.visible=false;
      }
      }
      if(healths2.width>0)
      {
      healths2.width=healths2.width-20;
      healths2.x=healths2.x-10;
      if(healths2.width===0)
      {
         healths2.visible=false;
      }
      }
      carsTouching=true;
   }
   }
   else
   {
      carsTouching=false;
   }
   if(healths1.width<=0)
   {
      healths1.width=0;
   }




   drawSprites();
}





//create the ball, playerPaddle and computerPaddle as sprite objects
var ball = createSprite(200,200,10,10);
var playerPaddle = createSprite(380,200,10,70);
var computerPaddle = createSprite(10,200,10,70);

ball.shapeColor = "blue";            
playerPaddle.shapeColor = "green";
computerPaddle.shapeColor = "yellow";
function draw() {
  
  //clear the screen
  background(rgb(255, 70,randomNumber(0,255) ));
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  centerLine();
 
  
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  
  //make the ball bounce off the paddles
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  
  //serve the ball when space is pressed
  if (keyDown("space")) {
    serve();
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
   reset();
  }
  
  //draw the sprites on the screen
  drawSprites();
}
function centerLine(){
   for (var i = 0; i < 400; i = i+20) {
    line(200,i,200,i+10);
  }
}
  
  
 function serve (){
   ball.velocityY = 6;
    ball.velocityX = 4;
   
   
 } 
 
 function reset(){
   
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
 }
  
  


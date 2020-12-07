//create the ball, playerPaddle and computerPaddle as sprite objects
var ball = createSprite(200,200,10,10);
var playerPaddle = createSprite(220,350,70,10);
var computerPaddle = createSprite(220,50,70,10);
var goal1 = createSprite(200,380,90,30);
var goal2 = createSprite(200,20,90,30); 

playerPaddle.shapeColor = "yellow";
computerPaddle.shapeColor = "red";
ball.shapeColor = "black";
goal1.shapeColor = "white";
goal2.shapeColor = "white"; 

//variable to store different state of game
var gameState = "serve";

var playerScore = 0;
var computerScore = 0;

function draw() {
  //clear the screen
  background("green");
  textSize(20);
  fill("black");
  //place info text in the center
  if (gameState === "serve") {
    
    text("Press Space to Serve",120,180);
    
  }
   
   text(playerScore,20,180);
   text(computerScore,20,235);
   
  //make the player paddle move with the mouse's y position
  playerPaddle.x = World.mouseX;
  
  
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.x = ball.x;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    stroke("white");
    line(i,200,i+10,200);
  }
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  ball.bounceOff(edges);
  
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
  
  //serve the ball when space is pressed
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }
  
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.isTouching(goal1) || ball.isTouching(goal2) ) {
  if (ball.isTouching(goal2)) {
    computerScore++;  
    }
   if (ball.isTouching(goal1)) {
        playerScore ++;
      }
         
    reset();
    gameState = "serve";
    
  }
if (playerScore===3||computerScore===3) {
    gameState="over";
    text("GAME OVER",150,180);
    text("Press 'R' to restart",130,150);
  }
    
 if (keyDown("r")&&gameState==="over") {
    gameState = "serve";
    playerScore = 0;
    computerScore = 0;
  }
   
  
  drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}
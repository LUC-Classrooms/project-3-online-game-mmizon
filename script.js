/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Madison Mizon 
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */

var gameState = "splash"
var player1;

function setup() {

  createCanvas(600, 400);
  player1 = new Player(width/2, height * 4/5);
  console.log(player1);

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch(gameState){ //will cascade thru a bunch of choices. 
    case "splash" : //if gameState contains splash 
      splash(); //then run splash funciton 
      break;
    case "play" : //if the value of gameState is play -->
      play(); //go to play funciton 
      break; //if you don't have break, it will continue through the code and execute all at the same time, it will all be immidiately overwritten. 
    case "gameOver" : 
      gameOver();
      break;
    default : 
      console.log("no math found");
  }
}

function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  //text("This is where the Game happens", width / 2, height / 2);
  player1.x = mouseX;
  player1.display();
}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed() {

  console.log("click!"); //no default situation, one of the three below things have to be true
  if(gameState == "splash"){
    gameState = "play";
  } else if(gameState == "play"){ //if the first thing is not true, it will check the next situation
    gameState = "gameOver";
  } else if (gameState == "gameOver"){ //of the other thing is not true, it will check this situation. Basically one has to be true. 
  gameState = "splash";
  }
console.log(gameState); //look at the value of gameState
}

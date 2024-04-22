/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Madison Mizon 
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */

var gameState = "splash"
var player1;
var gameTimer; //time the game play
var testBox; // a box to preview on the splash screen
var dropTimer; // regulate box drops
var presents = new Array(0); // an empty array called "presents"


function setup() {

  createCanvas(600, 400);
  player1 = new Player(width/2, height * 4/5);
  console.log(player1);
  gameTimer = new Timer(10000); //10 second timer 
  dropTimer = new Timer(1000); //timer for 1 second 
  testBox = new Box(width/2, height/3); //make one instancec of a box object 

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

  testBox.display(); //shows the box present 
  testBox.spin(); //spins the box present! 
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  //text("This is where the Game happens", width / 2, height / 2);
  //player1.x = mouseX;
  player1.display();
  player1.move();
  if(gameTimer.isFinished()){ //uses timer to...
    gameState = "gameOver" ///go to game over screen when time is up
  }
  textAlign(LEFT);
text("elapsed time: " + gameTimer.elapsedTime, 40, 100);
// show elapsed time in top left corner

  if(keyIsPressed)
  {
    switch(keyCode)
    {
      case UP_ARROW:
        player1.thrust(); // accelerate
        break;
      case DOWN_ARROW:
        player1.brake();
        break;
      case LEFT_ARROW:
        player1.angle -= .02; //turn left
        break;
      case RIGHT_ARROW:
        player1.angle += .02; //turn right
        break;
      default:
        console.log("use the arrow keys to move");
     }
  }

  if(dropTimer.isFinished()) { //added this section for arrays version
    let p = new Box(random(width), -40);
    // new box, anywhere across the width of the canvas, but 40px above the canvas
    presents.push(p); // add object 'p' to the 'presents' Array
    dropTimer.start(); // restart timer for next drop
  }

  for(let i = 0; i < presents.length; i++) { //added this section for arrays version
    // for each element of the array, represented by 'i', do the following:
    presents[i].display(); // draw it on the canvas
    presents[i].move(); // make it drop
    presents[i].spin() // make it rotate

    if(presents[i].y > height) {
      // present went below the canvas
      presents.splice(i, 1);
      // remove 1 element from from "presents" at index 'i'
    }

    let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
    //d is not the distance in pixels between presents[i] and player1 
    if (d < 50) {
      presents.splice(i, 1); // remove 1 item at index 'i'
    }
  }

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
  if(gameState == "splash"){ //look to see if the value of gameState matches 'splash' so start the splash screen
    gameState = "play";
    gameTimer.start(); //start the timer 
    dropTimer.start(); // start the drop timer for presents
  } else if(gameState == "play"){ //if the first thing is not true, it will check the next situation
    //gameState = "gameOver"; //commented out so i can click the mouse and keep on the game screen
  } else if (gameState == "gameOver"){ //of the other thing is not true, it will check this situation. Basically one has to be true. 
  gameState = "splash";
  }
console.log(gameState); //look at the value of gameState
}

/*
function keyPressed(){
  switch(keyCode){
    case UP_ARROW :
      console.log("up");
      player1.y -= 30 // move up 30px
      player1.angle = 0; // no rotation
      if(player1.y < 0) 
        player1.y = height; // wrap to bottom
      break;
    case DOWN_ARROW : 
      console.log("down"); 
      player1.y += 30 // move down 30px
      player1.angle = PI; // flip 180 degrees
      if(player1.y > height) 
        player1.y = 0; // wrap to top
      break;
    case LEFT_ARROW :
      console.log("left");
      player1.x -=30;
      player1.angle = PI + HALF_PI;
      if(player1.x < 0){
        player1.x = width;
      }
      break;
    case RIGHT_ARROW :
      console.log("right");
      player1.x +=30;
      player1.angle = HALF_PI;
      if(player1.x > width){
        player1.x = 0;
      }
      break;
    default : 
      console.log("use the arrow keys to move")
  }
}
*/
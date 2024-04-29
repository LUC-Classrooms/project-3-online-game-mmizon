function Box(_x, _y){
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)
  this.rSpeed = random(-.02, .02); // rotation speed

  this.angle = 0;

  /* choose a color scheme at random */
  //if(random(100) > 50){ // 50-50 chance
    //this.boxColor = color(random(100, 255), 0, 0); // red
    //this.ribbonColor = color(0, random(100, 255), 0); // green
  //} else {
    //this.boxColor = color(0, random(100, 255), 0); // green
    //this.ribbonColor = color(random(100, 255), 0, 0); // red
  //}
  this.boxColor = color(random(100, 255)); //makes fly random gray or white colors

  this.display = function(){

    push();
    translate(this.x, this.y);
    rotate(this.angle);

    rectMode(CENTER);
    fill(this.boxColor);
    ellipse(0, 0, 30, 40) //body of fly
    fill(0) //make eyes black
    ellipse(5, 20, 7) //eyes
    ellipse(-5, 20, 7)
    fill(200) //wings
    ellipse(15, -3, 20, 15)
    ellipse(-15, -3, 20, 15)
    line(13, 11, 23, 8) //front leg 
    line(-13, 11, -23, 8) //front leg 
    line(12, -14, 22, -17) //mid leg 
    line(-12, -14, -22, -17) //mid leg 

    //fill(this.ribbonColor);
    //rect(0, 0, 40, 10); // horizontal ribbon
    //rect(0, 0, 10, 40); // vertical ribbon

    pop();

  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}
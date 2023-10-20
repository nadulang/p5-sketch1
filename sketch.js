function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  // red circle
  fill(255, 0, 0);
  circle(200, 200, 400);

  // green sq
  fill(0, 255, 0);
  square(59, 59, 282);

  // blue circle
  fill(0, 0, 255);
  circle(201, 200, 281);
  
  // yellow sq
  fill(255, 255, 0);
  square(101, 101, 198);
  
  // turquoise circle
  fill(0, 255, 255);
  circle(201, 200, 198);

  // fuchsia sq
  fill(255, 0, 255);
  square(131, 130, 140);
  
  // white circle
  fill(255, 255, 255);
  circle(201, 200, 140);
  
  //gray sq
  fill(100);
  square(152, 151, 98);
  
  //black circle
  fill(0);
  circle(201, 200, 98);
}
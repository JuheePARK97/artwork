
function setup() {

  createCanvas(400, 400);
  background(255);
  noStroke();

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);
  
   fill(204);
  quad(189, 18, 306, 18, 356, 360, 175, 360); 
  
  fill(255);
  arc(248, 360, 120, 128, PI, TWO_PI);
  
    fill(102);
  rect(203, 100, 90, 63);
  
}


function mouseMoved() {
  ellipse(mouseX, mouseY, 5, 5);
    value = value + 80;
  if (value > 255) {
    value = 0;}
}

var value = 0;
function draw() {
  fill(value);
  ellipse(25, 25, c);
}

for (var i = 20; i < width - 10; i++) {
  for (var j = 20; j < height - 10; j++) {
    var c = color(204 - j, 153 - i, 0);
  }
}
updatePixels();

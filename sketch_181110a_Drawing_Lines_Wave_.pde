
void setup() {
  size(500, 500);
  background(204);
}

void draw() {
  stroke(0, 102, 153);
  line(0, 0, mouseX, mouseY);
}

// Click to clear the PGraphics object
void mousePressed() {
  clear();
}

var bubbles = [];

function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 100; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(1, 300)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(255, 200, 25, 200);

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(255, 25, 80, 20);
    } else {
      fill(255, 200, 255, 200);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * .8);
    bubble.x += random(i, 1);
    bubble.y += random(-1, i);
  }
}

# hw1
Changed the number of the bubbles by changing the range of i;  for (var i = 0; i < 100; i++)
Changed the size range of the bubbles by changing: radius: random(1, 300)
Background color changed: background(255, 200, 25, 200)
Changed the color of bubbles before touched/after touched
Changed the way bubbles move by: ellipse(bubble.x, bubble.y, bubble.radius * .8);
                                  bubble.x += random(i, 1);
                                  bubble.y += random(-1, i);

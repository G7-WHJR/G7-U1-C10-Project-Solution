function setup() {
  createCanvas(450, 400);

  function createStripes(x, blockColor) {
    var stripe = createSprite(x, 200, 75, 150);
    stripe.shapeColor = blockColor;
  }

  createStripes(140, "blue");
  createStripes(215, "white");
  createStripes(290, "red");
}

function draw() {
  background("honeydew");
  drawSprites();
}

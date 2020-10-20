var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 400;


function setup() {
  createCanvas(400,800);
  ground = createSprite(200,780,400,15);
  ground.shapeColor = color("white");
}

function draw() {
  background("black"); 
  
 
  drawSprites();
}
//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var spiceBisciutEngine, spiceBiscuitsWorld;
var box1, box2;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);

  spiceBisciutEngine = Engine.create();
  spiceBiscuitsWorld =  spiceBisciutEngine.world;
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(spiceBiscuitsWorld, ground);
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
}

function draw() {
  background(200,255,255);  
  Engine.update(spiceBisciutEngine);
  rectMode(CENTER);
  

  //rect(200,200,50,50);
  rect(ground.position.x, ground.position.y, 400,20);
  box1.display();
  box2.display();

  //drawSprites();
}
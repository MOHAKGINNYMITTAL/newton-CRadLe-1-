const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
  }
  roof=Bodies.rectangle(400, 50, 500, 10,options);
  bob1= new Bob(400,200,30);
  rope1 = new Rope(bob1.body,{x:400, y:50});
  World.add(world,roof);
  Engine.run(engine);
}

function draw() {
  background("black");  
  rectMode(CENTER);
  rect(roof.position.x,roof.position.y,500,10)
  Engine.update(engine);
  bob1.display();
  drawSprites();
}
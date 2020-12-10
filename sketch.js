
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, rope1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground1= new Roof (400,100,100,10);
 invground= new Roof (400,550,100,10)
bobObject1= new Bob (200,500,8);
bobObject2= new Bob (250,500,8);
bobObject3= new Bob (300,500,8);
bobObject4= new Bob (350,500,8);
bobObject5= new Bob (400,500,8);
rope1= new Rope (bobObject1.Body,ground1.Body,bobObject1.diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  drawSprites();
 
}




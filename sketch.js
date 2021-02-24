
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1=new Bob(400,550,25);
  bob2=new Bob(350,550,25);
  bob3=new Bob(300,550,25);
  bob4=new Bob(450,550,25);
  bob5=new Bob(500,550,25);
	roof=new Roof(400,100,650,50)
	

  rope1=new Chain(bob1.body,roof.body,-25,-1000)
  rope2=new Chain(bob2.body,roof.body,-25,-2000)
  rope3=new Chain(bob3.body,roof.body,-25,-2500)
  rope4=new Chain(bob4.body,roof.body,-25,-3000)
  rope5=new Chain(bob5.body,roof.body,10,-3500)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

}




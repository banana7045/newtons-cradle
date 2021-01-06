const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5
var roof,rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=Bodies.rectangle(400,150,300,60,{isStatic:true})
World.add(world,roof)

bob1=new bob(320,300,40)
bob2=new bob(360,300,40)
bob3=new bob(400,300,40)
bob4=new bob(440,300,40)
bob5=new bob(480,300,40)

rope1=new constraint(bob1.body,roof,-80,0)
rope2=new constraint(bob2.body,roof,-40,0)
rope3=new constraint(bob3.body,roof,0,0)
rope4=new constraint(bob4.body,roof,40,0)
rope5=new constraint(bob5.body,roof,+80,0)


Engine.run(engine);
const Render = Matter.Render;
var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(roof.position.x,roof.position.y,300,60)
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}




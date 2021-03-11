
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var world;
var paper;


function setup() {
	createCanvas(1300, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,570,width,20);
	dustbinObj=new Dustbin(1100,550);
	paper = new Paper(300,300,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  


  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.25,y:-0.25})
  }
}
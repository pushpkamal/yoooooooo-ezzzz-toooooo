
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground,ground1,ground1,ground;
var bin_wall;




function setup() {
  createCanvas(800,300);



  engine = Engine.create();
  world = engine.world;

  var ball_options={
    isStatic : false,
    restitution : 0.3,
    friction: 0,
    density : 1.2
   }
 
 
  ball=Bodies.circle(100,280,20,ball_options);
  World.add(world,ball);
   
  
  ground =new Ground(200,290,1200,20);

  bin_wall1 = new Ground(750,230,5,100);
  bin_wall2 = new Ground(650,230,5,100);


  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {

  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();

  bin_wall1.show();
  bin_wall2.show();

  Engine.update(engine);

  if (keyCode === 39) {

    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  }
  

}




  




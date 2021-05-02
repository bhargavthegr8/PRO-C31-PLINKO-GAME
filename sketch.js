var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=height; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var x = 75; x <=width-10; x=x+50) { 
    for (var y = 75; y <=400; y=y+200) {
      plinkos.push(new Plinko(x,y));
    }
  }

  for (var x = 50; x <=width-10; x=x+50) { 
    for (var y = 175; y <=400; y=y+200) {
      plinkos.push(new Plinko(x,y));
    }
  }
  
}
 


function draw() {
  background("black");
  textSize(20)
 
  
  if(frameCount%40===0){
    for(var x = 50; x<=width-50; x=x+random(100,200)){
    particles.push(new Particles(x,random(-400,0)))
    }
  }
  Engine.update(engine);
  ground.display();
  
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();   
  }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}


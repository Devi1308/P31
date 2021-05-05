var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Body=Matter.Body;
  
var divisionHeight=300;
var score =0;
var beaker,beakerImg;
var particles = [];
var plinkos = [];
var divisions = [];

function   preload(){
   beakerImg= loadImage("beaker.png");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  beaker = Bodies.rectangle(width/2,760,40,40);
  World.add(world,beaker);

 for(var k =0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
      
  for(var i= 15; i<=width-10; i=i+70){
    plinkos.push(new Plinko(i,80))
  }
  
  for(var i = 15; i<=width; i=i+70){
    plinkos.push(new Plinko(i,170))
  }
    
  for(var i = 15; i<=width+10; i=i+70){
    plinkos.push(new Plinko(i,250))
  }
  
  for(var i = 15; i<=width+20; i=i+70){
    plinkos.push(new Plinko(i,330))
  }
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  //beaker.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

   for(var j = 0; j < particles.length; j++ ){
    particles[j].display();
   }

   image(beakerImg,beaker.x,beaker.y);
  }
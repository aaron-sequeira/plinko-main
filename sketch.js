const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0
var gameState = "play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  textSize(20);
  text("200",745,520)
  
  textSize(20);
  text("200",665,520)
  
  textSize(20);
  text("200",586,520)
  
  textSize(20);
  text("100",505,520)

  textSize(20);
  text("100",425,520)

  textSize(20);
  text("100",345,520)

  textSize(20);
  text("500",265,520) 

  textSize(20);
  text("500",185,520)
  
  textSize(20);
  text("500",105,520)
  
  textSize(20);
  text("500",25,520)
  
  textSize(20);
  text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display(); 
  
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
    }

   if (particle!=null) {
     
   particle.display()
  
   if(particle.body.position.y>760){

       if(particle.body.position.x < 300){

         score=score+500;
         particle=null;
        if(turn>=5) gameState ="end"
       }    
   }
  }

 }
 if(gameState === "end"){

console.log("end")
 }
function mousePressed(){

if (gameState == "play") {
  console.log("mousePressed")
  turn++;
  particle=new Particle(mouseX,10,10,10); 

}

}
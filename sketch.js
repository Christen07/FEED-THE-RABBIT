var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orangeLeaf,orangeLeafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =loadImage("apple.png");
  orangeLeaf =loadImage("orangeLeaf.png")
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var rand= Math.round(random(1,3));
if(frameCount % 80 ==0){
  if(rand==1){
    createApples();
  }
  
}

  drawSprites();
}
function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale =0.07;
  apple.velocityY=3;
  apple.lifetime=150;
}

// create a function orange leaf
function createLeaves(){
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale =0.07;
  orangeLeaf.velocityY=3;
  orangeLeaf,lifetime=150;
}


// create a function red leaf
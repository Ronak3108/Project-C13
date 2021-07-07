var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2))
if(frameCount % 80 === 0){

  if(select_sprites == 1){

  createApples();

  }else{

  createLeaves();

  }
}
rabbit.x = World.mouseX


  drawSprites();
}


function createApples(){

apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.velocityY = 6;
apple.lifetime = 55;
apple.scale = 0.05;


}

function createLeaves(){

leaf = createSprite(random(50,350),40,10,10)
leaf.addImage(leafImg);
leaf.velocityY = 6;
leaf.lifetime = 63;
leaf.scale = 0.075;

}





































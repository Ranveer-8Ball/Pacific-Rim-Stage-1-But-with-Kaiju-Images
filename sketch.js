var ground, groundImage;
var bg,bgImage;
var Gipsy, GipsyImage;
var Otachi, OtachImage;

function preload (){
    groundImage = loadImage("Ground.png");
    bgImage = loadImage("background.png");
    GipsyImage = loadImage("GipsyImage.png")
}


function setup(){
    createCanvas(1500,600);
    ground = createSprite(500,580,1500,20);
    //ground.addImage("ground",groundImage);
    //ground.scale = 2.5; 
    ground.x = ground.width /2;
    ground.velocityX = -(6);

    Gipsy = createSprite(150,560,40,20);
   //Gipsy.velocityX = 2;
   Gipsy.addImage("Gipsy",GipsyImage);
    Gipsy.scale = 3;
}

function draw(){
    background(bgImage);
    if (ground.x < 300){
        ground.x = ground.width/2;
      }

    Gipsy.collide(ground);
    drawSprites();
}

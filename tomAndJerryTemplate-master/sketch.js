var tom, tomImage;
var jerry, jerryImage;
var garden, gardenImage;
var  jerryCapture, tomCapture;
var tomWalk, jerryWalk;
function preload() {
    //load the images here
    tomImage= loadAnimation("images/tomOne.png"); 
    jerryImage=loadAnimation("images/jerryOne.png");
    gardenImage=loadImage("images/garden.png")
    tomWalk=loadAnimation("images/tomTwo.png", "images/tomThree.png");
    jerryWalk= loadAnimation("images/jerryFour.png");
    jerryCapture= loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden= createSprite(500,400,600,600);
    garden.addImage(gardenImage);
    tom = createSprite(600,500, 20, 20);
    tom.addAnimation("tomSit", tomImage);
    tom.scale=0.2
    jerry= createSprite(300,500,50,50);
    jerry.scale= 0.2;
    jerry.addAnimation("jerryEatCheese", jerryImage);
}

function draw() {

    background(255,255,255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<tom.width/2+jerry.width/2
        && jerry.x-tom.x<tom.width/2+jerry.width/2
        && tom.y-jerry.y<tom.height/2+jerry.height/2
        && jerry.y-tom.y<tom.height/2+jerry.height/2
        ){
    jerry.changeAnimation("jerryCapture", tomCapture);
    tom.changeAnimation("tomCapture", tomCapture)
        }
    if(keyDown("left")){
        tom.x= tom.x-2
        tom.changeAnimation("tomwalks", tomWalk);
        jerry.changeAnimation("jerrywalks", jerryWalk);
        }

        if(keyDown("right")){
            tom.x= tom.x+2
            tom.changeAnimation("tomwalks", tomWalk);
            jerry.changeAnimation("jerrywalks", jerryWalk);
            }
            else{
                tom.changeAnimation("tomSit", tomImage); 
                jerry.changeAnimation("jerryEatCheese", jerryImage);
             }




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

//Create variables here
var dog,happyDog,database,foodS,foodStock,milkBottle;
var addFoodB,feedFoodB;
var fedTime,lastFed;
var foodObj;


function preload()
{
	dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
  
}



function setup() {
  database=firebase.database();
	createCanvas(1000, 400);
  
  dog1=createSprite(800,200,150,150)
  dog1.addImage(dog);
  dog1.scale=0.2

  foodStock=database.ref('Food');
  foodStock.on("value", readStock)
  

  
}


function draw() {  

   background(46,139,87);

   if(keyWentDown(UP_ARROW)){
     writeStock(foodS)
     dog1.addImage(happyDog)

   }
    
   textSize(30)
   fill('white')
   text("press the up arrow to feed milk to the dog", 300,100)

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
  
}


function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


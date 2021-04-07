var dog,sadDog,happyDog;
var feed,add;
var database;
var foodS = 10;
var foodStock = 10;
var lastFed = 0;
var foodObj = null;
var girl;
var opinion;
var button;
var thanks;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  bg = loadImage("Images/housepup.jpg")
  girl = loadImage("Images/GIRL.png")
}

function setup() {
  createCanvas(1000,700);

  var thanks = createElement('h3');
 

  database=firebase.database()

  foodObj = new Food();
  
  dog=createSprite(250,400,150,150);
  dog.addImage(sadDog);
  dog.scale=0.25;

  feed = createButton("FEED THE DOG.")
  feed.position(475,95)
  feed.mousePressed(feedDog)

  add = createButton("ADD THE FOOD.")
  add.position(800,95)
  add.mousePressed(addFoods)

  input = createInput ("Fill your Dog's Name"); 
  input.position (575, 205); 

  var name = input.value();

  input1 = createInput ("Fill opinion about your dog"); 
  input1.position (850, 470);
  var opinion = input1.value();


  var button = createButton("submit");
  button.position(850, 500);
  button.mousePressed(function(){
  input.hide();
  addButton.hide();
  feedButton.hide();
  thanks.html("THANK YOU... HOPE YOU ENJOYED THE GAME.. STAY TUNED")
  thanks.position(300,300)
})
}

function draw() {
  background(bg);

  drawSprites();
  foodObj.display();

  image(girl,400,375,475,450)

  if(mousePressedOver(button)){
  text("THANK YOU... HOPE YOU ENJOYED THE GAME.. STAY TUNED",300,300)

  }
  //display last fed
  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed (approx timing) : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed (approx timing) : 12 AM",350,30);
   }else{
     text("Last Fed (approx timing) : "+ lastFed + " AM", 350,30);
   }


}

//function to read food Stock

function readstock(data){
	foodS = data.val();
	foodObj.updateFoodStock(foodS);
	}


//increment foodS, updateFoodStock using foodS
function addFoods(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}


//change dog image, deduct foodS, updateFoodStock using foodS, set lastFed
function feedDog(){
  if(foodS > 0){
    dog.addImage( happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}
class Food{
    constructor(){
      //  this.foodStock = 20;
        this.lastFed = 0;

        this.image= loadImage("Images/Milk.png");
    
    }

    getFoodStock(){
        var getStockref = database.ref('FoodStock')
        getStockref.on("value",function(data){
        })
    }


    updateFoodStock(food){
        database.ref('/').update({
        foodStock :food
        })
    }


    display(){
        var x = 400, y = 120;
        imageMode(CENTER);
        if(foodS != 0){
           // console.log("PODA")
            for(var i = 0; i < foodS; i++){
                if(i % 10 === 0){
                   x = 220;
                   y += 400;
                }
                image(this.image, x, y, 50, 50);
                x += 30;
               // y +=10
            }
    }
}
}
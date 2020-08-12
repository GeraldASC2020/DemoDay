


let myXpos = 100;
let myYpos = 100;
let playGame = false;
let bagXpos = 300;
let bagYpos = 0;
let seedsXpos = 200;
let seedsYpos= 100;
let canXpos= 700;
let canYpos= 300;
let gtXpos = 1200;
let gtYpos = 500;
let tbXpos = 500;
let tbYpos = 300;
let wcXpos = 200;
let wcYpos = 500;
let trashYpos = 500;
let trashXpos = 500;
let state = "starting menu";
let button; 
let remove;
let score = 10;
let start;



function preload(){
bgImage = loadImage("Images/natureb.png");
player = loadImage("Images/Gardener.png");
bag = loadImage("Images/plasticbag.png");
can = loadImage("Images/Can.png");
trash = loadImage("Images/plasticbag.png");
tb = loadImage("Images/trashbag-withshadow.png");
seeds = loadImage("Images/seed.png");
gt = loadImage("Images/gardening-trowel.png");
wc = loadImage("Images/wc.png");

}
  
function setup() {
     button = document.querySelector("#startButton");
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER);
   // tint(200, 200);
    remove = document.querySelector("#Remove");

    button.addEventListener("click", function () {
        state= "level 1";
        remove.innerHTML="";
    })

}

function draw(){
    if (state == "level 1"){
        background(bgImage);
        rect(10, 10, 10 + score, 20);
        move();
        level1Movements();
        
        image(player, myXpos, myYpos, 70, 70);
        image(gt, gtXpos, gtYpos, 70 ,70);
        image(tb, tbXpos, tbYpos,70,70);
        image(wc, wcXpos, wcYpos,70,70);
        image(trash, trashXpos, trashYpos, 70, 70);
       
       // image(trash, enemyXpos,enemyYpos, 70,70);
    
        gtYpos += 5;
        wcYpos += 5;
        trashYpos += 5;
        tbYpos +=5;

       
        if (score == 100){
            state = "message";
             start = second();
        
        }
    }
      //  background(bgImage);  
    else if (state == "message"){
        background(255,0,0);
        textSize(32);
        text(" Get ready for level 2",300,200);
        let endTime = second();
        if ( endTime - start == 5){
            state = "level 2";    
        }

    }
    else if (state == "level 2") {
        background(bgImage);
        rect(10, 10, 10 + score, 20);
        move();
        level1Movements();
        level2movements();
        textSize(10);
        fill(0);
        text(score);
        image(can, canXpos, canYpos, 70, 70);
        image(seeds, seedsXpos, seedsYpos,70,70);
        image(bag, bagXpos, bagYpos,70,70);
        image(player, myXpos, myYpos, 70, 70);
        image(gt, gtXpos, gtYpos, 70 ,70);
        image(tb, tbXpos, tbYpos,70,70);
        image(wc, wcXpos, wcYpos,70,70);
        image(trash, trashXpos, trashYpos, 70, 70);

        bagYpos +=5;
        seedsYpos +=5
        canYpos += 5;
        gtYpos += 5;
        wcYpos += 5;
        trashYpos += 5;
        tbYpos +=5;

      if (score == 250) {
          background(255);
          textSize(40);
          text("You win", 400,300);

        }

    }
}


function move(){
    if (keyIsDown(LEFT_ARROW) && myXpos > 0) {
        myXpos -= 10 ;
      }
      else {
        myXpos -= 0;
      }
      if (keyIsDown(RIGHT_ARROW) && myXpos <= width-70) {
        myXpos += 10 ;
      }
      else {
        myXpos += 0;
      }
      if (keyIsDown(UP_ARROW) && myYpos > 0) {
        myYpos -= 10 ;
      }
      else {
        myYpos -= 0;
      }
      if (keyIsDown(DOWN_ARROW) && myYpos <= height-70) {
        myYpos += 10 ;
      }
      else {
        myYpos += 0;
    }
}

function level1Movements(){
    
    if (myXpos + 45 >= gtXpos - 25 && gtXpos + 25 >= myXpos && myYpos + 45 >= gtYpos - 25 && gtYpos + 25 >= myYpos){
        gtYpos = -25;
        gtXpos = Math.random()*width;
        score += 10;
    }
    if (myXpos + 45 >= wcXpos - 25 && wcXpos + 25 >= myXpos && myYpos + 45 >= wcYpos - 25 && wcYpos + 25 >= myYpos){
        wcYpos = -25;
        wcXpos = Math.random()*width;
        score += 10;
    }
    if (myXpos + 45 >= trashXpos - 25 && trashXpos + 25 >= myXpos && myYpos + 45 >= trashYpos - 25 && trashYpos + 25 >= myYpos){
        trashYpos = -25;
        trashXpos = Math.random()* width;
        score -= 10;
    }
    if (myXpos + 45 >= tbXpos - 25 && tbXpos + 25 >= myXpos && myYpos + 45 >= tbYpos - 25 && tbYpos + 25 >= myYpos){
        tbYpos = -25;
        tbXpos = Math.random()* width;
        score -= 10;
    }
    if ( wcYpos > 530){
        wcYpos = -25
        wcXpos = Math.random()*width;
    }
    if ( gtYpos > 530){
        gtYpos = -25
        gtXpos = Math.random()*width;
    }
    if ( tbYpos > 530){
        tbYpos = -25
        tbXpos = Math.random()*width;
    }
    if ( trashYpos > 530){
        trashYpos = -25
        trashXpos = Math.random()*width;
    }
    
}

function level2movements(){
    if (myXpos + 45 >= seedsXpos - 25 && seedsXpos + 25 >= myXpos && myYpos + 45 >= seedsYpos - 25 && seedsYpos + 25 >= myYpos) {
        seedsYpos = -25
        seedsXpos = Math.random()*width;
        score += 10;
    }
    if (myXpos + 45 >= canXpos - 25 && canXpos + 25 >= myXpos && myYpos + 45 >= canYpos - 25 && canYpos + 25 >= myYpos){
        canYpos = -25;
        canXpos = Math.random()*width;
        score -= 10;
    }
    if (myXpos + 45 >= bagXpos - 25 && bagXpos + 25 >= myXpos && myYpos + 45 >= bagYpos - 25 && bagYpos + 25 >= myYpos){
        bagYpos = -25;
        bagXpos = Math.random()*width;
        score -= 10;
    }
    if ( canYpos > 530){
        canYpos = -25
        canXpos = Math.random()*width;
    }
    if ( seedsYpos > 530){
        seedsYpos = -25
        seedsXpos = Math.random()*width;
    } 
     if (bagYpos > 530){
        bagYpos = -25
        bagXpos = Math.random()*width;
    }
}

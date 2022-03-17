var width = 1000;
var height = 1000;
var i = 0;
var p = 0;
var k = 0;

function setup() {
    createCanvas(1000, 1000);
    background(100);
    angleMode(DEGREES);
}

function draw() {
    
    translate(500, 500);
    /*rotate(90);
    noFill();
    stroke(0);
    strokeWeight(3);
    rect(0, 0, 50, 200); */

    var i =0;
    

    while(i < 100){
        rotate(i);
        fill(255);
        stroke(0);
        strokeWeight(2);
        rect(0, 0, 200, 200);
        i++; 

    }

    for(var i = 0; i < 100; i++){
        rotate(i);
        noFill();
        stroke(0);
        strokeWeight(1);
        rect(0, 0, 350, 400);

    }

    if (p == 0) {
    translate(0, 0);
    fill(235, 122, 138);
    ellipse(0, 0, 100, 100);
        
    }
    
    for(var k = 0; k < 100; k++){
        rotate(k);
        noFill();
        stroke(random(255), random(255), random(255) );
        strokeWeight(1);
        rect(0, 0, 350, 350);}

}


    

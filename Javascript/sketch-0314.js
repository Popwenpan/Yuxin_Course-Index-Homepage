function setup() {
    createCanvas(1000,1000);
    background(107, 169, 250);

    var i = 0;
    /* while (i < 100) {
        fill(random(255), random(255), random(255));
        //ellipse(50 * i, 50 * i, 250, 250)
        ellipse(random(1000), random(1000), 250, 250);
        i = i+1;
    } */
    
    /* fill(0);
    noStroke();
    rect(100, 100, 100, 500);

    fill(0);
    stroke(0);
    ellipse(250, 200, 300, 300);

    fill(194, 139, 204);
    stroke(0);
    ellipse(250,200,200,200);
    //ellipse(x,y,w,h) */

    
}

function draw(){
    
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(mouseX, mouseY, random(150, 150), random(150, 200))
}

function mousePressed(){
    saveCanvas("sketch-01", "png")
}
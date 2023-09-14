function setup() {
    createCanvas(800, 800);
    background(245,222,193);
}

function draw() {
    translate(400, 400);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(2);
    quad(-168.5, -400, 126, -400, 301.5, -251.5, 100.5, -162.5);
    fill(245,222,193);
    triangle(-400, -400, -275.5, -231, 126, -400);
    rotate(PI);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    strokeWeight(2);
    quad(-168.5, -400, 126, -400, 301.5, -251.5, 100.5, -162.5);
    fill(245,222,193);
    triangle(-400, -400, -275.5, -231, 126, -400);
}

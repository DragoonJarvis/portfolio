function setup() {
    createCanvas(500, 500);

}
function spiralthing(frameCount, x, y, Linelength, finalSize, shape, color1, color2) {




    translate(x, y);
    rotate(x);
    noFill();


    for (let i = 0; i < frameCount % finalSize; i++) {

        let radius = i * Linelength;
        let angle = (i * 20);
        let x1 = radius * cos(angle);
        let y1 = radius * sin(angle);

        let x2 = (radius + Linelength) * cos(angle);
        let y2 = (radius + Linelength) * sin(angle);
        let finalcolor = lerpColor(color1, color2, i / 125)
        stroke(finalcolor);
        shape(x1, y1, x2, y2);
    }
}

function draw() {
    background(0);

    spiralthing(frameCount, mouseX, mouseY, 1, 250, rect, color("#FFF000"), color("#FF0D2F"));
}



//modulo is like "up to #"
//let blue = color("#CEE7FF")
//let pink = color("#FFDAF5")
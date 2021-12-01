var xPos;
var yPos;
var scaleW;
var scaleH;

var r = 20;
var g = 100;
var b = 200;
var a = 0.0;
var s = 2.0;
var t = 0;
var faces = [];
var fruitMax = 3;

let fruits = ["🍒", "🍑", "🍓", "🍋"];
var index = 0;

function setup() {
  createCanvas(560, 400);
  angleMode(DEGREES);

  xPos = 20;
  yPos = 35;
  scaleW = random(40, 70);
  scaleH = random(80, 110);

  var index = 0;
  for (var i = 0; i < 16; i++) {
    faces[index] = new Face(xPos, yPos);
    xPos += 40;
    if (xPos > width - 200) {
      xPos = 20;
      yPos += 105;
    }
    index++;
  }
}

function draw() {
  //background(150);
  textSize(12);
  background(220);
  //scale(6.5);
  //for (var i = 0; i < 4; i++) {
    //text(fruits[index], 30, 30);
  text(mouseX + " " + mouseY, 60, 15);

  for (var i = 0; i < 16; i++) {
    faces[i].head();
    faces[i].speak();
  }

  if (frameCount % 24 == 0) {
    r = floor(random(20, 255));
    g = floor(random(20, 255));
    b = floor(random(20, 255));
    scaleW = random(40, 90);
    scaleH = random(80, 130);
    for (var i = 0; i < 16; i++) {
      faces[i].setMouth(random(scaleH * 0.33), random(scaleW * 0.23));
    }
  }
}

class Face {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = random(scaleW * 0.33);
    this.t = random(scaleW * 0.33);
    this.c = color(255, 150, 20);
    //this.fruitMax=random(0,3);
  }

  speak() {
    //mouth
    push();
    translate(this.x, this.y, this.s);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(this.x, this.y + 0.2 * scaleH, this.s, this.t);
    //ellipse(random(20,100),random(20,100), this.s, this.t));
    pop();
  }

  head() {
    push();
    translate(this.x, this.y, this.s);
    //face shape
    //scale(s);
    fill(130);
    ellipse(this.x, this.y, scaleW, scaleH);
    //eyes

    fill(r, g, b);
    ellipse(
      this.x - 0.13 * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.23,
      scaleH * 0.09
    );

    fill(0, 0, 0);
    ellipse(
      this.x - random(0.1, 0.2) * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.05,
      scaleH * 0.06
    );

    fill(r + 55, g + 55, b + 55);
    ellipse(
      this.x + 0.13 * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.23,
      scaleH * 0.09
    );

    fill(0, 0, 0);
    ellipse(
      this.x + random(0.1, 0.2) * scaleW,
      this.y - scaleH * 0.15,
      scaleW * 0.05,
      scaleH * 0.06
    );
    pop();
  }
  setMouth(s, t) {
    this.s = s;
    this.t = t;
  }
}

function mousePressed() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  //s = floor(random(0.25, 1.0));
  //s = floor(random(scaleW * 0.43));
  //t = floor(random(scaleH * 0.23));
  scaleW = random(40, 90);
  scaleH = random(80, 130);
  s = random(10, 90);
  t = random(10, 90);
  index++;
  loop();
}



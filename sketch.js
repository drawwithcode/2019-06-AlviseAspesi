var canvas;
var h1;
var bgcolor;
var strokeC;
var button;
var sliderSx;
var sliderSy;
var sliderX;
var sliderY;
var sliderR;
var sliderG;
var sliderB;
var sliderRb;
var sliderGb;
var sliderBb;
var sliderSt;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  strokeC = color(0);
  frameRate(10);
  //randomizer
  button = createButton("random");
  button.position(windowWidth / 2 - 550, windowHeight / 2 - 10);
  button.mousePressed(randomize);
  //text
  //h1 = createElement("h1", "move the sliders and see what happens");
  //h1.position(windowWidth / 2 - 260, 0);
  //scale control
  sliderSx = createSlider(10, 300, 50, 10);
  sliderSx.position(windowWidth / 2 + 500, windowHeight / 2 - 225);
  sliderSy = createSlider(10, 300, 50, 10);
  sliderSy.position(windowWidth / 2 + 500, windowHeight / 2 - 175);
  //position control
  sliderX = createSlider(windowWidth / 2 - 250, windowWidth / 2 + 250, windowWidth / 2, 10);
  sliderX.position(windowWidth / 2 + 500, windowHeight / 2 - 75);
  sliderY = createSlider(windowHeight / 2 - 250, windowHeight / 2 + 250, windowHeight / 2, 10);
  sliderY.position(windowWidth / 2 + 500, windowHeight / 2 - 25);
  //rgb color control
  sliderR = createSlider(0, 255, 125);
  sliderR.position(windowWidth / 2 + 500, windowHeight / 2 + 75);
  sliderG = createSlider(0, 255, 125);
  sliderG.position(windowWidth / 2 + 500, windowHeight / 2 + 125);
  sliderB = createSlider(0, 255, 125);
  sliderB.position(windowWidth / 2 + 500, windowHeight / 2 + 175);
  //stroke control
  sliderSt = createSlider(0, 10, 2, 1);
  sliderSt.position(windowWidth / 2 + 500, windowHeight / 2 + 225);
  //rgb color background control
  sliderRb = createSlider(0, 255, 125);
  sliderRb.position(windowWidth / 2 - 200, windowHeight / 2 + 425);
  sliderGb = createSlider(0, 255, 125);
  sliderGb.position(windowWidth / 2 - 50, windowHeight / 2 + 425);
  sliderBb = createSlider(0, 255, 125);
  sliderBb.position(windowWidth / 2 + 100, windowHeight / 2 + 425);
}

function randomize() {
  strokeC = color(random(0, 255), random(0, 255), random(0, 255));
  sliderSx.value(random(0, 300));
  sliderSy.value(random(0, 300));
  sliderX.value(random(windowWidth / 2 - 250, windowWidth / 2 + 250));
  sliderY.value(random(windowHeight / 2 - 250, windowHeight / 2 + 250));
  sliderR.value(random(0, 255));
  sliderG.value(random(0, 255));
  sliderB.value(random(0, 255));
  sliderRb.value(random(0, 255));
  sliderGb.value(random(0, 255));
  sliderBb.value(random(0, 255));
  sliderSt.value(random(0, 10));
}

function draw() {
  background(color(sliderRb.value(), sliderGb.value(), sliderBb.value()));
  //line
  stroke(color(random(255), random(255), random(255)));
  strokeWeight(2);
  line(pmouseX, pmouseY, mouseX, mouseY);
  //ellipse
  fill(color(sliderR.value(), sliderG.value(), sliderB.value()));
  stroke(strokeC);
  strokeWeight(sliderSt.value());
  ellipse(sliderX.value(), sliderY.value(), sliderSx.value(), sliderSy.value());
}

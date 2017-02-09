var backColor = 20;
var unit, cx, cy;
var a;
var trace; //opacity of the background
var slider;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  //var container = select('#tree');
  background(backColor);
  // myCanvas.width = container.width;
  // myCanvas.height = container.height;
  // myCanvas.parent('tree');
  unit = width/6.32;
  trace = 0;
  //frameRate(8);
  slider = createSlider(0, 250, PI/5, 1);
}

function draw() {
  // background(backColor);
  fill(20, trace); //12
  rect(0, 0, width, height);

  //a = slider.value();
   a = -PI*(-1+sin(frameCount/120)); //100, 10

  translate(width/2, height);
  push();
  branch(unit);
  pop();
  //trunc
  stroke(235, 220);
  strokeWeight(unit/20);
  line(0,0,0,-unit);

}

function branch(len){

  //responsive strokeWeigth
  var color = noise(random(0, 1))*155+186;
  stroke(color);
  strokeWeight(len/20);

  //branch
  line(0,0,0,-len);

  translate(0,-len/0.99);
  rotate(a);
  if (len>4){
    branch(len*0.67);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  unit = width/8;
  cx = width/2;
  cy = height/2;
  background(backColor);
}

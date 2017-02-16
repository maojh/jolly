/*
title: Tree
Author: Matteo Testa
*/


// variables: f+-[]
// axioms: f
// rules: f > ff+[+f-f-f]-[-f+f+f]

var backColor = 200;
var len;
var angle;
var trace = 10;
//var axiom = "A";
var axiom = "f";
var sentence = axiom;
var rules = [];
rules[0] = {
    a: "A", b: "ABC"
}
rules[1] = {
  a: "B", b: "A"
}
rules[2] = {
  a: "f", b:"ff+[+f-f-f]-[-f+f+f]"
}

function generate(){
  var nextSentence = "";
  var found;
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    //for (var j = 0; j < rules.length; j++) {
    if(current == rules[2].a) {
      found = true;
      nextSentence += rules[2].b;
    }
    //}
    if (!found) {
      nextSentence += current;
    }
    found = false;
  }
  sentence = nextSentence;
  var el = createP(sentence);
  turtle();
  len *= 0.6;
  trace *= 0.6;
  scale(0.7);
}

function turtle(){
  background(backColor);
  translate(width/2, height);
  noStroke();
  fill(0, 130, 0);
  ellipse(0,0,20,20);
  strokeWeight(trace);

  for (var i = 0; i < sentence.length; i++) {
    stroke(0, random(150, 230), random(100, 120), trace*50);
    var current = sentence.charAt(i);
    if (current == "f") {
      line(0, 0, 0, -len);
      translate(0, -len);
      noStroke();
      fill(100,0,50);
      ellipse(0,-len,trace, trace*2);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current =="[") {
      push();
    } else if (current =="]") {
      pop();
    }
  }

}

function setup() {
  var container = select('#tree');
  //var myCanvas =
  createCanvas(windowWidth, windowHeight);
  // myCanvas.width = container.width;
  // myCanvas.height = container.height;
  // myCanvas.parent('tree');
  turtle();

  // var button = createButton("generate");
  // button.mousePressed(generate);
  createP(axiom);
  len = height/15;
  angle = random(10, 35);
  console.log(angle);
  angle = radians(angle);
  text(0,0,"click");
}

function mousePressed(){
  generate();

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  unit = width/8;
  background(backColor);
}

/// <reference types="p5/global" />
import 'p5';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

window['setup'] = setup;
window['draw'] = draw;

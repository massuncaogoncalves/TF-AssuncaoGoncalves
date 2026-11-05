const MENTA = "#b9e3d3";
const BEJE = "#eadfc8";
const MOSTARDA = "#e2a93b";

let colunas = 8
let celulas = [];

function setup() {
  createCanvas (windowWidth, windowHeight);
  noStroke();
  criarCelulas();

}

function criarCelulas(){
  celulas = [];
  let t = width / colunas;
  for (let y = t / 2; y < height; y += t) {
    for (let x = t / 2; x < width; x += t) {
      celulas.push ({
        x: x,
        y: y,
        tipo: floor(random(3)),
        ang: floor(random(4)) * HALF_PI,
        cor: random([MENTA, BEJE, MOSTARDA])
      });
    }
  }
}

function draw(){
  background(255);
  let t = width / colunas;

  for (let c of celulas){
    let d = dist(mouseX, mouseY, c.x, c.y);
    let tamanho = map(d, 0, width / 2, t, t * 0.4, true);

    push();
    translate(c.x, c.y);
    rotate(c.ang);
    fill(c.cor);

    if (c.tipo == 0){
      circle(0, 0, tamanho);
    } else if (c.tipo == 1){
      arc(0,0, tamanho, tamanho, PI, TWO_PI, PIE);
    } else {
      rectMode(CENTER);
      rect(0,0, tamanho, tamanho *0.4, tamanho * 0.2);
    }
    pop();
  }
}

function mousePressed (){
  for (let c of celulas){
    c.ang +=HALF_PI;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  criarCelulas();
}
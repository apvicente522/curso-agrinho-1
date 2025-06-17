function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('rgb(0,57,255)'); // cor de fundo
  fill('yellow'); 
  
  circle(200,200,300); // rosto
  fill('white');
  circle(150,150,60); // olho esquerdo
  circle(250,150,60); // olho direito
  triangle(200,180,170,220,220,220); //nariz
  line(127,109,174,114); // sobracelha esquerda
  line(222,117,272,109); // sobrancelha esquerda
  fill('rgb(0,57,255)')
  circle(150,150,13); // pupila esquerda
  circle(250,150,13); // pupila direita
  fill('red')
  ellipse(200, 250, 80, 30); // boca
  fill('black');
  ellipse(190,57,304,57); // chapéu
  if (mouseIsPressed){
    console.log(mouseX, mouseY);
  }
}
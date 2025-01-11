function setup() {
  createCanvas(600, 600);
  background(165, 191, 204)
  fill(145, 172, 143)
  noStroke()
  rect(0,height/2, width,height/2)
}

function draw() {
  noStroke()
  fill(126, 153, 163)
  triangle(0, width/2, width/4, height/4, width/2, height/2)
  fill(76, 88, 91)
  triangle(width/2, height/4+5, width/4, height/2+5, width, height/2+5)

  
  if (mouseY < 300){
    noStroke()
    fill(255, 232, 147)
    circle(height/2-40, width/4+20, 10)
  }
  else{
    background(165, 191, 204)
  fill(145, 172, 143)
  noStroke()
  rect(0,height/2, width,height/2)

  }
  
}





let p;
const particles = [];
const particlesSQ = [];
const particlesR = [];
var r;
var g;
var b;
var a;
let t = "Click Anywhere"



function setup(){
createCanvas(window.innerWidth -10 , window.innerHeight -100)

const partLength = Math.floor(window.innerWidth / 500)
for(let i =0; i < partLength; i++){
  particles.push(new PartCir)
}
const partLengthSQ = Math.floor(window.innerWidth / 500)
for(let i =0; i < partLengthSQ; i++){
  particles.push(new PartSqu)
}
const partLengthR = Math.floor(window.innerWidth / 500)
for(let i =0; i < partLengthR; i++){
  particles.push(new PartRect)
}
//p = new PartCir();
//ps = new PartSqu(); 


}

function draw(){


  if(mouseIsPressed){
    fill(0)
    circle(mouseX, mouseY)
  }
  r = random(255); 
    g = random(100,200); 
    b = random(100); 
    a = random(200,255);
    fill(r,g,b,a)
  background(r, g, b, 2)
  particles.forEach((p, index)=>{
    p.update()
    p.draw()
  })
  particlesSQ.forEach((pS, index)=>{
    pS.update()
    pS.draw()
  })
  particlesR.forEach((pR, index)=>{
    pR.update()
    pR.draw()
  })
  
  

  

}

function mousePressed() {
  noLoop();

  
}

function mouseReleased() {
  loop();
}

rand =  Math.floor(Math.random() * 300)
class PartCir {
 
  constructor(){
   
    this.pos = createVector(random(width), random(height))
    this.size = random(100);
    this.vel = createVector(random(-5, 2), random(-2, 2))
  }


  update(){
    this.pos.add(this.vel)
    this.edges()
  }

  draw(){

    r = random(255); 
    g = random(100,200); 
    b = random(100); 
    a = random(200,255);
    fill(r,g,b,a)
    //noStroke(random(1))
    //fill(22,random(),22)
    ellipse(this.pos.x, this.pos.y, this.size, random(100))
  }

  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }
  }

}



class PartSqu {
  constructor(){
    this.pos = createVector(random(width), random(height))
    this.size = random(0, 100);
    this.vel = createVector(random(-2, 2), random(-2, 2))
  }

  update(){
    this.pos.add(this.vel)
    this.edges()
  }


  draw(){
   // noStroke()
   // fill(`rgba(${rand},${rand},${rand},${rand})`)
   r = random(255); 
    g = random(100,200); 
    b = random(100); 
    a = random(200,255);
    fill(r,g,b,a)
    square(this.pos.x, this.pos.y, this.size, random(10))
  }
  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }
  }

}
class PartRect {
  constructor(){
    this.pos = createVector(random(width), random(height))
    this.size = random(100);
    this.vel = createVector(random(-2, 2), random(-2, 2))
  }

  update(){
    this.pos.add(this.vel)
    this.edges()
  }


  draw(){
   // noStroke()
   // fill(`rgba(${rand},${rand},${rand},${rand})`)
   
   r = random(255); 
   g = random(100,200); 
   b = random(100); 
   a = random(200,255);
   fill(r,g,b,a)
    rect(this.pos.x, this.pos.y, this.size, random( 200))
  }
  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }
  }

}
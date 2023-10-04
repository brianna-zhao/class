class Ball{
  constructor(){
    this.a=mouseX;
    this.b=mouseY;
    this.x=random(10,100);
    this.y=random(150,255);
    this.h=random(50,200);
    this.t=random(50,100);
    this.c=color(this.y,this.h,this.y,this.t);
  }
  display(){
      fill(this.c);
      circle(this.a,this.b,this.x);
    }
  }

let ball;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(140,240,240);
  ball=new Ball;
  
}
function draw(){
  if(mouseIsPressed){  
    ball.display();
  }
  if(keyIsPressed){
    background(140,240,240)
  }
}
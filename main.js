img="";
function setup(){
canvas=createCanvas(640,420);
canvas.center();
}
function preload(){
img=loadImage("bedroom.jpeg");
}
function draw(){
image(img,0,0,640,420);
fill("red");
stroke("red");
text("Bed",60,80);
noFill();
rect(50,65,350,350);
}

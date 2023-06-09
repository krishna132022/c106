function preload(){
picture=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function draw(){
image(video,0,0,300,300);
image(picture,noseX,noseY,80,35);
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('poseNet is initialized');
}
noseX=0;
noseY=0;
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-35;
noseY=results[0].pose.nose.y-5;
}
}
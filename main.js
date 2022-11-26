leftWristX=0
rightWristY=0
rightWristX=0
leftWristY=0
song_1=""
song_2=""
scoreleftWrist=0
scorerightWrist=0

function setup(){
    canvas=createCanvas(600, 400)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
image(video, 0, 0, 600,500 )

fill("#FF0000")
stroke("#FF0000")

circle(rightWristX, rightWristY, 20)
if(scorerightWrist>0.2){
 circle(rightWristX, rightWristY, 20);
 song_1.play()
 document.getElementById("song").innerHTML="playingsong_1"
}

if(scoreleftWrist>0.2){
    circle(leftWristX, leftWristY, 20);
    song_2.play()
    document.getElementById("song").innerHTML="playingsong_2"
   }
}

function preload(){
    song_1=loadSound("music.mp3")
    song_2=loadSound("music2.mp3")
}

function play(){
song.play();
song.setVolume(1);
song.rate(1)
}

function modelLoaded(){
 console.log('poseNet is started' )
 
}

function gotPoses(results){
 if(results.length>0){
    console.log(results)

scoreleftWrist=results[0].pose.keypoints[9].score
scorerightWrist=results[0].pose.keypoints[10].score


    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX= "+  rightWristX+"rightWristY= "+rightWristY) 

    leftWristX=results[0].pose. leftWrist.x;
    leftWristY=results[0].pose. leftWrist.y;
    console.log(" leftWristX= "+   leftWristX+" leftWristY= "+ leftWristY)
}
}
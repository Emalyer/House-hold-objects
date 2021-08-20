function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JDhplXKM5/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("model is loaded");
}

function preload(){

}

function draw(){
image(video,0,0,400,400);
classifier.classify(video,gotreuslt);
}

function gotreuslt(error,reuslts){
if(error){
    console.error(error);
}
else{
    console.log(reuslts);
    document.getElementById("result_name_object").innerHTML=reuslts[0].label;
    document.getElementById("result_name_accuracy").innerHTML=reuslts[0].confidence.toFixed(3);
}
}
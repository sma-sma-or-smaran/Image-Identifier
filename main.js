Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function cap_img(){
Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img id="still_img"src="'+data_uri+'"/>';
});

}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/svCePufVE/model.json',modelloaded)

function modelloaded(){

console.log("model is loaded");

}
function identify(){
    img=document.getElementById("still_img");
    classifier.classify(img,got_result);

}
function got_result(error,results){

if(error){
    console.error(error);
}
else{
console.log(results);
document.getElementById("obj_name").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
}
}
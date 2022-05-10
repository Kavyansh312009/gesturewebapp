prediction="";

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';

    })
}

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X3aDAcvYL/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model LOADED!');
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data = "The First Prediction is"+prediction_1;
    var utterThis  = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
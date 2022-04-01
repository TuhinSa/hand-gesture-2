Webcam.set ({
    width: 300,
    height: 300,
    image_format : 'png',
    png_quality : 90

});
camera = document.getElementById("camera")
Webcam.attach("#camera")
function takesnapshot()
{
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id = "final_picture" src = " ' + data_url + '"/>'
    } )
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZiM9nmhRJ/model.json', modelLoaded)
function modelLoaded(){
    console.log("Model Loaded")
}
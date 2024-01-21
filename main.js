//https://teachablemachine.withgoogle.com/models/OCl3x5Z8y/

var prediction = ""
Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera")

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "' />"
    })
}
console.log("ml5version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OCl3x5Z8y/model.json", modelLoaded)

function modelLoaded() {
    console.log("modelLoaded!")
}



function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        prediction = results[0].label;
        document.getElementById("result_gesture_name").innerHTML = prediction;
        speak()
        if (prediction == "happy") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        } else if (prediction_1 == "sad") {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        } else if (prediction_1 == "ok") {
            document.getElementById("update_emoji").innerHTML = "&#128076";
        } else {
            document.getElementById("update_emoji").innerHTML = "&#9996;";
        }

    }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "I predict a " + prediction;

    var utterthis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);

} 
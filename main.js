function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VV3o7fnL5/',modalReady);
}
function modalReady(){
    classifier.classify(gotResults);
}
Webcam.set(
    {
    width:370,
    height:320,
    image_format:'png',
    png_quality:90
    }
);
Webcam.attach("#camera");
camera=document.getElementById("camera");

function clickPic()
{
    Webcam.snap(function(data_uri)
        {
            document.getElementById("PicResult").innerHTML='<img id="Takenpic" src="'+data_uri+'"/>';
        });
}

console.log('ml5 version-', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/If1UB9Mn6/model.json', modelLoaded);
function modelLoaded()
{
    console.log("Model Loaded")
}
function identify()
{
    img=document.getElementById('Takenpic');
    classifier=classifier.classify(img, gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        document.getElementById("familyResult").innerHTML=results[0].label
        document.getElementById("mostAccuracy").innerHTML=(results[0].confidence.toFixed(1)*100+"%");
    }
}
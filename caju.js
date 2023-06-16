var objects=[];
var status="";
function preload(){
    video=createVideo("videoplayback.mp4");
}
function setup(){
    canvas=createCanvas(669,669);
    canvas.center();
    video.hide();
}
function flor(){
    objectDetector=ml5.objectDetector("cocossd",nuget)
}

function nuget() {
    console.log("¡Modelo cargado!")
    status = true;
    video.loop();
    video.play();
    video.speed(1);
    video.volume(0);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
  
  
  function draw() {
    image(video, 0, 0, 480, 380);
        if(status != "")
        {
          objectDetector.detect(video, gotResult);
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Estado: objeto detectado";
            document.getElementById("number_of_objects").innerHTML = "Número de objetos detectados: "+ objects.length;
   
            fill("#FF0000");
            percent = floor( objects[i].confidence*100 );
            text(objects[i].label+""  +porcent,bjects[i].x + 15, objects[i].y + 15);
            
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
  }
  

var tiedye, tiedye2; //these are global variables

function preload() {
  tiedye = loadImage("./tiedye.png");
  tiedye2 = loadImage("./tiedye2.png");
}

function setup() {
  canvas_context=createCanvas(700,600);
  background(0,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

for(var line2=0;line2<7;line2=line2+1){
  for(var counter=0;counter<7;counter=counter+1){
    if (line2%2==0)

    {
      if(counter%2==1){
        image(tiedye,counter*100,line2*100,100,100);
      }
      else{
        image(tiedye2,counter*100,line2*100,100,100);
      }
    }
      else {
        if(counter%2==0){
          image(tiedye,counter*100,line2*100,100,100);
        }
        else{
          image(tiedye2,counter*100,line2*100,100,100);
        }


    }
  }}

  save(canvas_context, "dragonImage.jpg")
  //https://p5js.org/reference/#/p5/save

}

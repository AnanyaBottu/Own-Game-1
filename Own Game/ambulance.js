class Ambulance{
constructor(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.siren=loadSound("Siren.m4a");
    this.image = loadImage("amb.png");
}


display(){
    push();
    rect(this.x,this.y,this.width,this.height);
    pop();
    image(this.image,this.x-10,this.y-25,100,100);
    //this.image.scale=2;


}



}
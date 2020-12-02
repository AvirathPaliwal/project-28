class Stone{
constructor(x,y,r){
    var position={
     isStatic:false,
     restitution:0,
     friction:1,
     density:1.2
    }
    this.body=Bodies.circle(x,y,r/2,position);
    this.r=r
    this.image=loadImage("stone.png")
    World.add(world,this.body);
}
display(){
    var pos =this.body.position
  push()
  translate(pos.x,pos.y)
  rotate(this.body.angle)
  ellipseMode(RADIUS)
  imageMode(CENTER)
  image(this.image,0,0,50,50);
  pop()
}
}
class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX= offsetX;
        this.offsetY= offsetY;
        this.rope= Constraint.create();
        var options={

            bodyA :bodyA ,
            bodyB: ground1,
           pointB:{x:this.offsetX, y:this.offsetY}
            
            
            
            
            }


World.add(world,this.rope);
    }
    display(){

var pointA= this.rope.bodyA.position;
var pointB= this.rope.bodyB.position;

strokeWeight(10);
line (pointA.x,pointA.y,pointB.x,pointB.y);


        

    }
}
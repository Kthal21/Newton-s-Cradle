class Bob{

    constructor(x,y,diameter){
    
        
            this.x=x;
    this.y=y;
    this.diameter=diameter;
    this.body= Matter.Bodies.circle(x,y,diameter);
    this.diameter=14;
    World.add(world,this.body);
    
    }
    
    
    display(){
    
        var paperpos=this.body.position;		
    fill ("purple");
                push()
                translate(paperpos.x, paperpos.y);
                rectMode(CENTER)
                strokeWeight(3);
                fill(255,0,255)
                ellipse(0,0,this.r, this.r);
                imageMode(CENTER);
            
                pop()
    }
}
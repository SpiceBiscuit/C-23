class Box{
    //creates a new Box object
    constructor(a,b,c,d) {


   
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(a,b,c,d,options);
        this.width = c;
        this.height = d;
        World.add(spiceBiscuitsWorld, this.body);
    }

    display(){
        console.log(this.body);
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
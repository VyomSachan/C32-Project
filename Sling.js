class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01
        }
        this.sling = Matter.Constraint.create(options);
        this.sling.length = 10;
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;

            push ();
            strokeWeight(5);
            stroke ("green");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop ();
        }     
    }  
}
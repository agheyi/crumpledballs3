class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 40
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = pointB
    }
    fly()
    {
        this.chain.bodyA = null;
    }
    display(){
        if (this.chain.bodyA)
        {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}
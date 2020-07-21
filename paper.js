class Paper
{
    constructor(x, y)
    {
        this.paper = Bodies.circle(x, y, 20, {isStatic: false, restitution:0.3, friction: 0.5, density:1.2});
        World.add(world, this.paper);
    
    this.paperi = loadImage("Sprites/paper.png")
    
    }
    
    display()
    {
        var pos = this.paper.position;
        var angle = this.paper.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.paperi,0, 0, 50, 50)
    pop();
    }

}


class Trash
{
    constructor(x, y, width, height)
    {
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        this.width = width;
        this.height = height;
        

        this.image = loadImage("Sprites/dustbin.png");
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image, 0, 0, 190, 210);
        pop();
    }
}
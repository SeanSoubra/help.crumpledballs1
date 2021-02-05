class Dustbin{

    constructor(x, y, width, height){
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height)
    World.add(world, this.body)
    }

    display(){

        var dustbinpos = this.body.position

        push()
        translate(dustbinpos.x, dustbinpos.y)
        rectMode(CENTER)
        rect(dustbinpos.x, dustbinpos.y, this.width, this.height)
        pop()
        


    }
}


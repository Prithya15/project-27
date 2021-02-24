class Bob{
    constructor(x,y,diameter){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,diameter,options)
        this.diameter=diameter
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
       push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("white")
        ellipse(0,0,this.diameter)
        pop()

        if(keyDown("up")){
            Matter.Bodies.applyForce(1200,1200,600)
          }
    }
}
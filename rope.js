class Rope{

    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffnes:0.1
        }
        this.pointB = pointB
        this.rope1 = Constraint.create(options);
        World.add(world, this.rope1);
        
    }

    display(){
        var pointA=this.rope.bodyA;
        var pointB=this.pointB;
        line(pointA.position.x,pointA.position.y,pointB.x,pointB,y)
    }






}
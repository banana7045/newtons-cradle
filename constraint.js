class constraint{
    constructor(A,B,Bx,By){
     var option = {
       bodyA:A,
       bodyB:B,
       pointB:{x:Bx,y:By},
       length:130,
       stiffness:0.4
       
     }   
     this.Px=Bx;this.Py=By
    this.chain = Constraint.create(option) 
    World.add(world,this.chain)
    }
  
    display(){
        push();
        strokeWeight(5)
      line(this.chain.bodyA.position.x,
        this.chain.bodyA.position.y,
        this.chain.bodyB.position.x+this.Px,
        this.chain.bodyB.position.y)
        pop();
    };
    }

class Plinko{
    constructor(x,y,radius){
        var options = {
            restitution:1.0,
            restitution:false,
            friction:0.5,
            density:1.2,
          
        }
        
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        
          
        }
        
        display(){
            push();

            for(var j = 40; j<= width; j = j+50){
            plinkos.push(new Plinko(j,75));
            }

            for(var j = 15; j<= idth-10; j= j+50){
            plinkos.push(new Plinko(j,175));
            }
            translate(this.body.position.x , this.body.position.y);
            rotate(this.body.angle);
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
        }
    }
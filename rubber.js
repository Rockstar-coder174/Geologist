class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r=r
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("cyan");
      fill(255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  
class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3.0,
          'density':30.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("silver");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
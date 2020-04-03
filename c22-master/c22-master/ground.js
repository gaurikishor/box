class Ground{
    constructor(x,y,weight,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,weight,height,options);
      this.weight = w; 
      this.height = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    rect(pos.x, pos.y, this.weight,this.height);
    }
  };
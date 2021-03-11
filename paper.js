class Paper{
	constructor(x,y,r){
       var options = {
          restitution:1,
		  friction:1
	   }

	   this.image = loadImage("paper.png")

		this.body = Bodies.circle(x,y,r,options)
		this.r = r
		World.add(world,this.body)
				
	}

	display(){
	  var pos = this.body.position
	  push();
	  translate(pos.x,pos.y)
      fill("white")
	  imageMode(RADIUS)
	  image(this.image,0,0,this.r,this.r)
	  pop();
			
	}

}
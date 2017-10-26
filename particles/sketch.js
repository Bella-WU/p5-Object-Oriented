var particles = [];
function setup(){
	createCanvas(windowWidth, windowHeight)
	
}

function draw(){
	background(255)
	noStroke()
	particles.push(new Particle())
	for(var i = particles.length-1; i >= 0; i--){
		particles[i].update()
		particles[i].display()
		if(particles[i].isDead()){
			particles.splice(i,1)
		}
	}
	
}

var Particle = function(){
	this.pos = {x: width/2, y: height/2},
	this.speed = {x: random(-1,1), y: random(-1,5)},
	this.accel = {x:random(-0.1,0.1), y: 0.025},
	this.color = {r:random(0,255), g: random(0,255), b: random(0,255)},
	this.size = random(20,100),

	this.update = function(){
		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
		this.speed.x += this.accel.x;
		this.speed.y += this.accel.y;
	}

	this.display = function(){
		fill(this.color.r,this.color.g,this.color.b)
		ellipse(this.pos.x,this.pos.y,this.size,this.size)
	}

	this.isDead = function(){
		console.log(this.pos)
		return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height)
	}

}
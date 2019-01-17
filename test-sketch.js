function setup() {
  createCanvas(400, 400);
	background('green');

}

function draw() {
	//monkey
	//body
		fill("brown");
  	ellipse(200, 320, 150, 250);
	//ears
		fill("brown");
  	ellipse(150, 170, 50, 50);
			fill("pink");
  		ellipse(150, 170, 20, 20);
		fill("brown");
  	ellipse(250, 170, 50, 50);
  		fill("pink");
			ellipse(250, 170, 20, 20);
	//face
		fill("brown");
  	ellipse(200, 200, 100, 150);
	//eyes
		fill("white");
  	ellipse(180, 180, 30, 30);
		ellipse(220, 180, 30, 30);
  	fill("blue");
		ellipse(180, 180, 5, 5);
		ellipse(220, 180, 5, 5);
	//mouth
		line(185, 240, 215, 240);
	//nose
		fill("pink")
  	ellipse(190, 220, 10, 10);
		ellipse(210, 220, 10, 10);
		line(192, 215, 194, 185);
		line(208, 215, 206, 185);	
}

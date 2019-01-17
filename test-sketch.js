function setup() {
  createCanvas(600, 600);
	
}

function draw() {
  background(72,187,248);
	//city outline
	fill(220);
	beginShape();
	vertex(590,200);
	vertex(540,195);
	vertex(480,185);
	vertex(475,187);
	vertex(474,215);
	vertex(420,215);
	vertex(350,120);
	vertex(315,120);
	vertex(300,140);
	vertex(325,215);
	vertex(325,230);
	vertex(300,250);
	vertex(250,250);
	vertex(240,215);
	vertex(160,215);
	vertex(150,270);
	vertex(170,270);
	vertex(170,300);
	vertex(200,300);
	vertex(200,460);
	vertex(300,490);
	vertex(590,550);
	vertex(590,200);
	endShape();
	
	//labels
	fill(0,0,0);
	textSize(20);
	textStyle(NORMAL);
	text("Vancouver", 340,250);
	fill(0,0,255)
	textSize(20);
	textStyle(ITALIC);
	text("Strait of Georgia",100,170);
		
	//proportional symbols
	var diameter = 20;
	//circle
	strokeWeight(2)
	fill(255, 0, 0);
	ellipse(250, 250 ,diameter, diameter);
	//circle2
	fill(0, 0, 255);
	ellipse(275, 430 ,2 * diameter, 2 * diameter);
			 }

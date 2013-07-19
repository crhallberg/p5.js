var clicks = 0, presses = 1;
var img, img2, rad;
var lastAdd = 0;
var rads = 0;
var r;
var bg = [];
var writer;

var canvas0, canvas1, canvas2;
var text0, img0;

var setup = function() {
	println("setup");
	
	canvas0 = createCanvas(800, 400);
	canvas0.mousePressed(mousePressed0);

	canvas1 = createCanvas(200, 100);
	canvas1.position(canvas0.width+10, canvas0.height+10);

	text0 = createElement("<h1>helloworld</h1>");
	text0.id("test0");
	text0.class("text");
	text0.size(50, 200);
	text0.position(canvas0.width-50, 200);

	img0 = createImage("http://media.tumblr.com/fecdc135ce5bdf0016bcd71da93d2ecb/tumblr_inline_mkr3wrfR2m1qz4rgp.png");
	img0.size(300, 300);
	img0.position(220, canvas0.height-200);

	canvas2 = createCanvas(150, 150);
	canvas2.mousePressed(mousePressed2);
	canvas2.position(100, canvas0.height - canvas1.height*0.25);


	//colorMode(HSV);
	printMatrix();
	writer = new PrintWriter("name1");
};


var draw = function() {

	context(canvas0);
	drawCanvas0();

	//context(canvas1);
	//drawCanvas0();

	context(canvas1);
	background(0, 50, 200);
	fill(bg[0], bg[1], bg[2]);
	rect(10, 10, 30, 80);


	context(canvas2);
	background(255, 200, 10);
	ellipse(width/2, height/2, 100, 30);

};

var drawCanvas0 = function() {
	bg = [255*sin(.008*frameCount), 255*sin(.003*frameCount), 255*sin(.01*frameCount)];
	fill(bg[0], bg[1], bg[2]);
	noStroke();
	rect(0, 0, width, height);

	strokeWeight(10);
	stroke(255, 100, 0, 100);
	var c0 = [255, 255, 255];
	var c1 = [0, 0, 0];
	var c2 = lerpColor(c0, c1, 0.8);
	fill(c2[0], c2[1], c2[2]);
	translate(width/2, height/4);
	shearX(PI/4);
	rect(0, 0, 50, 50);
}

var mousePressed0 = function(e) {
	// whatevs
	println("0 pressed");
}

// these get added by createCanvas
var mousePressed2 = function(e) {
	// whatevs
	println("2 pressed");
}

var mousePressed = function(e) {
	println("mouse pressed");
	//save("hi");
	//writer.close();
	//saveStrings(['hi', 'blah']);
	console.log(e);
	clicks++;
};

var keyPressed = function(e) {
	keyCode = e.keyCode || e.which;
	key = String.fromCharCode(keyCode);
	println("key pressed "+keyCode+" "+key);
	writer.print(key);
	//alert('key pressed '+keyCode);
	presses++;
};

var keyReleased = function(e) {
	keyCode = e.keyCode || e.which;
	key = String.fromCharCode(keyCode);
};

var keyTyped = function(e) {
};

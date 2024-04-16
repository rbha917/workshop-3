let imgs = []
let lily, lotus, hibiscus, rose, tulip, daffodil, carnation, lavender;

function preload() {
  lily = loadImage('lily.jpg');
  lotus = loadImage('lotus.jpg');
  hibiscus = loadImage('hibiscus.jpg');
  rose = loadImage('rose.jpg');
  tulip = loadImage('tulip.jpg');
  daffodil = loadImage('daffodil.jpg');
  carnation = loadImage('carnation.jpg');
  lavender = loadImage('lavender.jpg');
}

function setup() {
  frameRate(1)
  createCanvas(600, 600);
  background(220);
  pixelDensity(1);
  imgs.push(lily);
  imgs.push(lotus);
  imgs.push(hibiscus);
  imgs.push(rose);
  imgs.push(tulip);
  imgs.push(lavender);
  imgs.push(carnation);
  imgs.push(daffodil);
}

function draw() {

  lotus.loadPixels();

	for (let y = 0; y < lotus.height /2; y ++){
		for (let x = 0; x < lotus.width; x ++){
			let index = (x + y * width) * 4;
			// lotus.pixels[index] = 0 //red
			// lotus.pixels[index + 1] = 0 //green
			lotus.pixels[index + 2] = random(255) //blue
			lotus.pixels[index + 3] = 255 //alpha
		}
	}

  lotus.updatePixels();

  let r = random(imgs); 
  let s = random(imgs);
  let t = random(imgs);
  let v = random(imgs);

	image(r, 0, 0, 300, 200);
  filter(INVERT);

  image(s, 300, 0, 300, 200);

  image(t, 0, 200, 300, 200);
  filter(POSTERIZE, 6);

  image(v, 300, 200, 300, 200);

  // let x = random(rose.width);
	// let y = random(rose.height);
	// let c = rose.get(int(x), int(y));
	// fill(c);
	// noStroke();
	// rect(x, y, 20, 20);

}



# workshop-3

### Link to sketch: 

## Images
- Make a folder under explorer for images
	- drag and drop images into it
- let img; at start of page to define images
- function preload()
	img = loadImage('images [folder name]/[image name].jpg');
allows image to be auto-loaded into code
- resize image under setup
	img.resize(300, 0) = full image on screen without distortion or cutting
- add image into screen under draw
	image(img, x, y, width/2, height/2 [centre image by x and y], desired height, desired width [for distortion]);
- imageMode(CENTER) = centre image to page
### Full code to bring image into centre of page
	imageMode(CENTER);
	image(img, x, y, width/2, height/2, 100, 100);
 
## Filters
	filter(GRAY or INVERSE)
	filter(BLUR or POSTERIZE, 5 [degree of blur])
	tint(255, 0, 0) = rgb colours to image

## Arrays
	let num = 5 will store one number
	let nums = [3, 5, 20, 5]stores multiple values with an index number within the array from 0 onwards that can be used in text e.g.
	rect(100, 100, nums[4], 60) will produce a rectangle with a height of 5
- Strings = same as arrays but using text
	let names = ["sarah", "james", "kim", "olga"]
	text(names[2], x, y) = print name in specified position
- Images in an Array
	let imgs = []
	let apples, bananas, pears;
	preload images
	apples = loadImage('images/apples.jpg')
- under setup 
	imgs.push(apples) adds an image to the end of an array in order so apples would be 0 and so on
	frameRate(1) = how many times the drawing runs per second, so each one will run once in a second
- under draw
	image(imgs[2], 0, 0) 
	let r = random(imgs) will draw random images from the array
	image(r, 0, 0) = run thru the images randomly

## Pixels
- Equation to find values of a given pixel on the screen
	(x value + y value times width) times 4
-pixelDensity(1) under setup to make sure they showup the same on every device
### Changing pixels on the whole canvas
	loadPixels();
 
	for (let y = 0; y < height/2; y ++){
		for (let x = 0; x < width; x ++){
			let index = (x + y * width) * 4;
			pixels[index] = random(255) //red
			pixels[index + 1] = 0 //green
			pixels[index + 2] = random(255) //blue
			pixels[index + 3] = 255 //alpha
		}
	}
 
	updatePixels();
- Change pixel colour values on an image, add img. before all pixel commands so img.loadPixels and img.updatePixels etc. and the height and width values inside the for loops
	- block out certain colours using // to only alter specific colour values
 
### Painting an abstract image using colour values from within the image
	- preload image
	let x = random(img.width);
	let y = random(img.height);
	let c = img.get(int(x), int(y));
	fill(c);
	noStroke();
	rect(x, y, 20, 20);

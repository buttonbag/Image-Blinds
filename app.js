const t1 = new TimelineLite();
const imageContainer = document.querySelector(".imageContainer");
const imgSlats = 5;
const imgWidth = imageContainer.offsetWidth/imgSlats;
const animation = {scaleX:0, ease: Back.easeInOut};
// let images;
// let duration;


for(i=0; i<imgSlats; i++){
    /* make image divs */
	div = document.createElement("div");	
	div.className = "image";
	imageContainer.appendChild(div)
	
	/* move background images for each */
	div.style.backgroundPosition = -i*imgWidth+"px";
	
}

images = document.querySelectorAll(".image");
duration = 5/images.length;

images.forEach((image)=>{
	image.style.width = imgWidth+"px";
});


function blinds() {   
    t1.to(images[0], duration, animation);
	for(i=1; i<images.length; i++) {
		t1.to(images[i], duration, animation, `-=${duration*.8}`);
    }
    console.log(duration);
    console.log(duration*.8);
};

t1.add(blinds, "+=.5");
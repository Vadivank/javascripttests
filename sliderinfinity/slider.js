const images = [
    "bird.512.png",
    "cat.512.png",
    "crocodile.512.png",
    "dog.512.png",
    "elephant_cristmass.512.png",
    "elephant.512.png",
    "giraffe.512.png",
    "icebear.512.png",
    "lion.512.png",
    "teddy.512.png",
    "tiger.512.png",
    "wolf.512.png"
];

let activeImage = 0;

const sliderPlace = document.querySelector('.slider-line');
const widthOffset = document.querySelector('.slider').clientWidth;
sliderPlace.style.width = 3 * widthOffset + 'px';
sliderPlace.style.heigth = widthOffset + 'px';
sliderPlace.style.left = '-' + widthOffset + 'px';
let flag = true;

const initSlider = () => {
    const img = document.createElement('img');
    img.alt = '';
    img.src = './images/' + images[activeImage];
    sliderPlace.append(img);
    nextImageGenerate();
    prevImageGenerate();
};

const nextImageGenerate = () => {
    let nextImage = activeImage + 1;
    if (nextImage >= images.length) {
        nextImage = 0;
    }
    const img = document.createElement('img');
    img.alt = '';
    img.src = './images/' + images[nextImage];
    sliderPlace.append(img);
    console.log(images[nextImage], nextImage);
};

const prevImageGenerate = () => {
    let prevImage = activeImage - 1;
    if (prevImage < 0) {
        prevImage = images.length - 1;
    }
    const img = document.createElement('img');
    img.alt = '';
    img.src = './images/' + images[prevImage];
    sliderPlace.prepend(img);
};

const nextSlide = () => {
    activeImage++;
    if (activeImage >= images.length) {
        activeImage = 0;
    }
    nextImageGenerate();
}


initSlider();

document.querySelector('.next-button').addEventListener('click', nextSlide);
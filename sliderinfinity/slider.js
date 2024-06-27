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

const nextImageGenerate = (w = false) => {
    let nextImage = activeImage + 1;
    if (nextImage >= images.length) {
        nextImage = 0;
    }
    const img = document.createElement('img');
    img.alt = '';
    img.src = './images/' + images[nextImage];
    if (w) {
        img.style.width = 0;
    }
    sliderPlace.append(img);
};

const prevImageGenerate = (w = false) => {
    let prevImage = activeImage - 1;
    if (prevImage < 0) {
        prevImage = images.length - 1;
    }
    const img = document.createElement('img');
    img.alt = '';
    img.src = './images/' + images[prevImage];
    if (w) {
        img.style.width = 0;
    }
    sliderPlace.prepend(img);
};

const nextSlide = () => {
    if (!flag) {
        return;
    }
    flag = !flag;

    activeImage++;
    if (activeImage >= images.length) {
        activeImage = 0;
    }
    // document.querySelector('.slider-line img').remove();
    nextImageGenerate(true);

    animate({
        duration: 1000,
        draw: function (progress) {
            document.querySelector('.slider-line img:last-child').style.width = (widthOffset * progress) + 'px';
        },
        removeElement: null
    });

    animate({
        duration: 1000,
        draw: function (progress) {
            document.querySelector('.slider-line img').style.width = (widthOffset * (1 - progress)) + 'px';
        },
        removeElement: document.querySelector('.slider-line img')
    });
}

const prevSlide = () => {
    if (!flag) {
        return;
    }
    flag = !flag;

    activeImage--;
    if (activeImage < 0) {
        activeImage = images.length - 1;
    }
    // document.querySelector('.slider-line img:last-child').remove();
    prevImageGenerate(true);

    animate({
        duration: 1000,
        draw: function (progress) {
            document.querySelector('.slider-line img:last-child').style.width = (widthOffset * (1- progress)) + 'px';
        },
        removeElement: null
    });

    animate({
        duration: 1000,
        draw: function (progress) {
            document.querySelector('.slider-line img').style.width = (widthOffset * progress) + 'px';
        },
        removeElement: document.querySelector('.slider-line img:last-child')
    });
};

initSlider();

document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

async function animate ({ duration, draw, removeElement }) {
    const start = performance.now();

    requestAnimationFrame(function animate(time) {
        let step = (time - start) / duration;
        if (step > 1) {
            step = 1;
        }

        draw(step);

        if (step < 1) {
            requestAnimationFrame(animate);
        } else {
            if (removeElement) removeElement.remove();
            flag = true;
        }
    });
};

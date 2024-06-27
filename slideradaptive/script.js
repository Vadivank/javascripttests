document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);



const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;

let pageWidth = null;
let pageHeight = null;

let x1 = null;
let y1 = null;

function init() {
    console.log('resize');

    pageWidth = document.querySelector('.slider').offsetWidth;

    sliderLine.style.width = pageWidth * images.length + 'px';
    
    images.forEach(item => {
        item.style.width = pageWidth + 'px';
        item.style.height = 'auto';
    });

    rollSlider();
}

window.addEventListener('resize', init);

init();

document.querySelector('.slider-prev').addEventListener('click', function () {
    rollingLeft();
});

document.querySelector('.slider-next').addEventListener('click', function () {
    rollingRight();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * pageWidth + 'px)';
}

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    console.log('Touch:' + x1, y1);
}

function rollingLeft() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
}

function rollingRight() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
}

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    // console.log('Move:' + x2, y2);

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            rollingLeft();
        } else {
            rollingRight();
        }
    } else {
        if (yDiff > 0) {
            console.log('down');
        } else {
            console.log('up');
        }
    }

    rollSlider();

    x1 = null;
    y1 = null;

}
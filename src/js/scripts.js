const slideShow = document.querySelector('.slide-show');
const images = slideShow.querySelectorAll('img');
let currentImageIndex = 0;

function adjustImagePosition() {
    const containerHeight = slideShow.offsetHeight;
    const imageHeight = images[currentImageIndex].offsetHeight;
    const topPosition = (containerHeight - imageHeight) / 2;
    images[currentImageIndex].style.top = `${topPosition}px`;
}

function cycleImages() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
    images[currentImageIndex].style.opacity = 1;
    adjustImagePosition();
    currentImageIndex = (currentImageIndex + 1) % images.length;
    setTimeout(cycleImages, 3000);
}

cycleImages();

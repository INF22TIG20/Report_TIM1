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
    // Hide all images
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }

    // Show the current image
    images[currentImageIndex].style.opacity = 1;

    // Adjust the position of the current image
    adjustImagePosition();

    // Update the index for the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Schedule the next cycle after 3 seconds (adjust as needed)
    setTimeout(cycleImages, 3000);
}

// Start the initial cycle
cycleImages();

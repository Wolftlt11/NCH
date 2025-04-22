
document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo img");
    const nav = document.querySelector("nav");
    
    logo.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1) rotate(360deg)";
        nav.style.display = "block";
        nav.classList.add("show-nav");
    });
    
    logo.addEventListener("mouseout", function() {
        this.style.transform = "none";
        nav.style.display = "none";
        nav.classList.remove("show-nav");
    });
    
    nav.addEventListener("mouseover", function() {
        nav.style.display = "block";
        nav.classList.add("show-nav"); 
    });
    
    nav.addEventListener("mouseout", function() {
        nav.style.display = "none";
        nav.classList.remove("show-nav");
    });
    });


/************/
/**GALLERY***/
/***********/
// Get elements for the carousel
const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Function to move to the next or previous slide
function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1; // Loop back to last image
    }
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0; // Loop back to first image
    }
    updateCarousel();
}

// Function to update the carousel's visible image and previews
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the correct offset for sliding
    carouselImages.style.transform = `translateX(${offset}%)`;

    
    const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    const nextIndex = (currentIndex + 1) % carouselItems.length;


    document.querySelectorAll('.prev-preview, .next-preview').forEach((el) => {
        el.remove();
    });

    // Add previous image preview
    const prevImage = document.createElement('img');
    prevImage.src = carouselItems[prevIndex].src;
    prevImage.alt = carouselItems[prevIndex].alt;
    prevImage.classList.add('carousel-item', 'prev-preview');
    carouselImages.appendChild(prevImage);

    // Add next image preview
    const nextImage = document.createElement('img');
    nextImage.src = carouselItems[nextIndex].src;
    nextImage.alt = carouselItems[nextIndex].alt;
    nextImage.classList.add('carousel-item', 'next-preview');
    carouselImages.appendChild(nextImage);
}

// Auto-slide the carousel every 6 seconds (changed to 6 seconds for better viewing)
setInterval(function () {
    moveSlide(1); // Move to the next slide
}, 6000);

// Event listener for gallery images to change the carousel image when clicked
const galleryImages = document.querySelectorAll('.grid img');
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index; // Set the clicked image as the current image in the carousel
        updateCarousel();
    });
});

// Event listener for carousel navigation buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    moveSlide(-1); // Move to the previous slide
});

nextButton.addEventListener('click', () => {
    moveSlide(1); // Move to the next slide
});

// Initialize carousel with the first image (optional, for a smoother user experience)
updateCarousel();

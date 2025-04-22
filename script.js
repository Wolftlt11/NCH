window.onload = function() {
  var animationContainer = document.getElementById('animation-container');
  var exploreBtn = document.getElementById('explore-btn');

  // hide the animation container and show the landing page
  function hideAnimation() {
      animationContainer.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling if needed
      localStorage.setItem('hasVisited', 'true'); // Store visit status
  }

  // Check if the user has visited before
  if (!localStorage.getItem('hasVisited')) {
      setTimeout(hideAnimation, 20000); // 

      exploreBtn.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default link behavior
          hideAnimation();
          window.location.href = 'index.html'; // Navigate to the landing page
      });
  } else {
      hideAnimation(); // If user has visited before, hide animation immediately
  }
};

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function showSlide(index) {
slides.forEach((slide, i) => {
  slide.classList.remove('active');
  if (i === index) {
    slide.classList.add('active');
    slide.style.animation = 'fadeIn 1s ease-in-out';
  }
});
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

// Change slide every 5 seconds (5000ms)
setInterval(nextSlide, 5000);


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
/************************/
/***********************/
/****ARTIST*********/
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in effect on scroll
    const sections = document.querySelectorAll(".story-section, .grid img");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Lightbox for gallery images
    document.querySelectorAll(".grid img").forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `<div class="lightbox-content">
                                    <span class="close">&times;</span>
                                    <img src="${this.src}" alt="${this.alt}">
                                  </div>`;
            document.body.appendChild(lightbox);

            lightbox.querySelector(".close").addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });

    // Auto-play video when in view
    const video = document.querySelector("iframe");
    const videoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.src += "&autoplay=1"; // Adds autoplay parameter
            }
        });
    }, { threshold: 0.5 });

    videoObserver.observe(video);
});
/***************************/
/*************************/
/*******HEAVEN*******/
document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll Animation on Scroll
    const places = document.querySelectorAll('.place');

    function revealOnScroll() {
        places.forEach(place => {
            const placeTop = place.getBoundingClientRect().top;
            if (placeTop < window.innerHeight - 100) {
                place.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run on load in case elements are already in view

    // Active link highlighting
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
/***********************/
/****END*****/
/****************/

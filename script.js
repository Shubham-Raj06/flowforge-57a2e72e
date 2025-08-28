```javascript
/**
 * Portfolio Website - Modern JavaScript
 */

// Smooth Scrolling (using a library for wider browser compatibility)
import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  easing: 'easeInOutCubic',
});


// Particle Effects (using a library like particles.js)
// Ensure particles.js is included in your HTML
window.onload = function() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: '#b61924',
        background_image: '',
        background_position: '50% 50%',
        background_repeat: 'no-repeat',
        background_size: 'cover'
      }
    });
  }
};



// Interactive Elements (Example: Image Hover Effect)
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('portfolio-item--hovered'); // Add class for hover styling
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('portfolio-item--hovered');
  });
});


// Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Basic validation (expand as needed)
    if (nameInput.value.trim() === '') {
      isValid = false;
      nameInput.classList.add('error'); // Add error class for styling
    } else {
      nameInput.classList.remove('error');
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
      isValid = false;
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }

    if (messageInput.value.trim() === '') {
      isValid = false;
      messageInput.classList.add('error');
    } else {
      messageInput.classList.remove('error');
    }


    if (isValid) {
      // Simulate form submission (replace with actual AJAX request)
      console.log('Form submitted successfully!');
      // You would typically use fetch() or XMLHttpRequest to send data to the server

      // Reset the form after submission
      contactForm.reset();
    } else {
      console.log('Form validation failed. Please check the errors.');
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// Mobile Menu Functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenuButton.classList.toggle('open'); // Toggle the button's class to show/hide X icon.
  });

  // Close menu when clicking outside (optional)
  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target) && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      mobileMenuButton.classList.remove('open');
    }
  });
}


// Immersive Gallery (using a library like Lightbox or Swiper)
// Implement based on the library chosen, often involving:
// 1. Including the library's CSS and JS files.
// 2. Initializing the gallery plugin on your image containers.
// 3. Customizing options for the desired look and feel.
// Example Using basic Modal for Gallery
const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.getElementById('close-modal');


galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
    });
});

if(closeModalButton){
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});



// Intersection Observer for Animation on Scroll (Fade-in)
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated'); // Add a class that triggers the animation
      observer.unobserve(entry.target); // Stop observing after animating
    }
  });
}, {
  threshold: 0.2 // Adjust threshold as needed
});


elementsToAnimate.forEach(element => {
  observer.observe(element);
});


// ES6+ Features (Example: Array Destructuring)
const teamMembers = [
  { name: 'Alice', role: 'Designer' },
  { name: 'Bob', role: 'Developer' },
];

teamMembers.forEach(member => {
  const { name, role } = member;
  console.log(`Team member: ${name}, Role: ${role}`);
});

//Dynamic Year for Footer
document.getElementById("year").innerHTML = new Date().getFullYear();
```
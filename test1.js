// JavaScript code to add animations and interactivity

// Function to handle form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for submitting! We will get in touch with you soon.');
});

// Animated scroll to sections
document.querySelectorAll('ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Animation for button glow effect
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Image hover effect
const images = document.querySelectorAll('.pic img, .pict img, .pi1 img, .picture img');

images.forEach(image => {
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

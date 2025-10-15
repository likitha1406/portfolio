// Smooth scroll for same-page navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Only prevent default if the link is an anchor within the same page
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    }
    // If href points to another page, allow normal navigation
  });
});

// Waving hand animation
const wave = document.querySelector('.wave');
if (wave) {
  let rotate = 0;
  setInterval(() => {
    rotate = rotate === 20 ? -20 : 20;
    wave.style.transform = `rotate(${rotate}deg)`;
  }, 500);
}

// Fade-in effect for sections on scroll
const fadeInElements = document.querySelectorAll('.details, .details-a, .details-b, .details-c, .img');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 1s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, options);

fadeInElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  observer.observe(el);
});

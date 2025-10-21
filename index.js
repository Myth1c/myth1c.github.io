document.addEventListener("DOMContentLoaded", () => {
    const projects = Array.from(document.querySelectorAll('.project')).reverse(); // Reverse order
    const background = document.getElementById('background-overlay');
  
    let currentBackground = '';
  
    function updateBackground() {
      let foundVisible = false;
  
      for (const project of projects) {
        const rect = project.getBoundingClientRect();
        const isBottomVisible = rect.bottom <= window.innerHeight && rect.bottom > 0;
  
        if (isBottomVisible) {
          const bg = project.dataset.bg;
          if (currentBackground !== bg) {
            background.style.backgroundImage = `url("${bg}")`;
            currentBackground = bg;
          }
          foundVisible = true;
          break; // Stop at the first (bottom-most) visible one
        }
      }
  
      if (!foundVisible) {
        background.style.backgroundImage = '';
        currentBackground = '';
      }
    }
  
    window.addEventListener('scroll', updateBackground);
    window.addEventListener('load', updateBackground);
});

const slideIndices = [0, 0, 0]; // One index per project

function plusSlide(n, projectIndex) {
  const slideshows = document.querySelectorAll(".project-images.slideshow");
  const slides = slideshows[projectIndex].querySelectorAll(".slide");
  slideIndices[projectIndex] += n;

  if (slideIndices[projectIndex] >= slides.length) {
    slideIndices[projectIndex] = 0;
  }
  if (slideIndices[projectIndex] < 0) {
    slideIndices[projectIndex] = slides.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === slideIndices[projectIndex]) {
      slide.classList.add("active");
    }
  });
}
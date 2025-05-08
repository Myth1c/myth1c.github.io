const background = document.getElementById('background');

const backgrounds = {
  project1: 'url(images/project1-image1.jpg)',
  project2: 'url(images/project2-image1.jpg)',
  // Add more as needed
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        background.style.backgroundImage = backgrounds[id] || 'none';
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('.project').forEach(section => {
  observer.observe(section);
});

const slideIndices = [0, 0]; // One index per project

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
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
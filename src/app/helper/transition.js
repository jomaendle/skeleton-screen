
console.log('in transition.js');

window.addEventListener('appLoaded', () => {
  animatePageTransition();
});

function animatePageTransition() {
  let css = localStorage.getItem('cssLoaded');
  console.log('css: '+css);
  if(css !== null && css !== ''){
    console.log('animate Transitions');
    const mainContent =  document.getElementById('application-content');
    const skeletons =  document.getElementById('skeletons');

    // Fade in and out both pages
    skeletons.style.animation = 'fadeOut 800ms ease-out';
    mainContent.style.animation = 'fadeIn 800ms ease-in forwards';
    mainContent.style.position = 'absolute';
    mainContent.style.top = 0;

    window.setTimeout(() => {
      skeletons.style.display = 'none';
    }, 800);
  }
};


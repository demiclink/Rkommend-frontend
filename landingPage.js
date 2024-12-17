//FADE OBSERVER

faders = document.querySelectorAll(".fade-in");
sliders = document.querySelectorAll(".slide-in");

appearOptions = {
  threshold: 0.5,
};
const appearOnScroll = new IntersectionObserver((enteries, appearOnScroll) => {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});



.fade-in {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
  
  .fade-in.appear {
    opacity: 1;
  }
  
  .from-left {
    transform: translateX(-50%);
  }
  
  .from-right {
    transform: translateX(50%);
  }
  
  .from-left,
  .from-right {
    transition: opacity 250ms ease-in, transform 300ms ease-in;
    opacity: 0;
  }
  
  .from-left.appear,
  .from-right.appear {
    transform: translateX(0%);
    opacity: 1;
  }
  
  .square-1 {
    transition: transform 400ms;
  }
  
  .square-2 {
    transition: transform 800ms;
  }
  
  .square-3 {
    transition: transform 1000ms;
  }
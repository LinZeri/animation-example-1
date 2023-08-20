const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text  = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector ("h1");

//scrollmagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 3100,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

  //Video Animation
  let accelAmount = 0.15;
  let scrollPos = 0;
  let delay = 0;

  scene.on('update', e => {
    scrollPos=e.scrollPos / 1000;
  })

  setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    console.log(scrollPos, delay);

    video.currentTime = delay;
  }, 120);


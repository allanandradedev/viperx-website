const hero = document.querySelector('.hero');
const intro_video = hero.querySelector('video');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();


// Scene
const scene = new ScrollMagic.Scene({
    duration: 4500,
    triggerElement: hero,
    triggerHook: 0,
})
.setPin(hero)
.addTo(controller);

// Video Animation
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on("update", e => {
    scrollPos = e.scrollPos / 500;
})

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;

    intro_video.currentTime = delay;
}, 40)

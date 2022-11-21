const hero = document.querySelector('.hero');
const intro_video = hero.querySelector('video');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();


// Scene
const hero_scene = new ScrollMagic.Scene({
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

hero_scene.on("update", e => {
    scrollPos = e.scrollPos / 500;
})

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;

    intro_video.currentTime = delay;
}, 40)


let timeline = new TimelineMax().add(
    [
        TweenMax.to('h2', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%', opacity: 1, y:0, duration: 2.2})
    ]
)


const inovation = document.querySelector('.inovation');


const inovation_scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: inovation,
})
.setPin(inovation)
.setTween(timeline)
.addIndicators()
.addTo(controller)
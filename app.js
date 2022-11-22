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

let timeline = new TimelineMax()

timeline
    .to('.innovation p', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2})
    .to('.innovation h2', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2})
    .to('.innovation h6', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2})
    .to('.innovation a', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2});


const innovation = document.querySelector('.innovation');


const innovation_scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: innovation,
    triggerHook: 1
})
.setTween(timeline)
.addTo(controller)


const macbook = document.querySelector('.macbook');
const macbook_video = macbook.querySelector('.macbook_video');
let macbook_scene_scrollPos = 0;
let macbook_scene_delay = 0;

const macbook_scene = new ScrollMagic.Scene({
    duration: 4500,
    triggerElement: macbook,
    triggerHook: 0,
})
.setPin(macbook)
.addTo(controller);

macbook_scene.on("update", e => {
    macbook_scene_scrollPos = (e.scrollPos - 6200) / 500;
})

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    
    intro_video.currentTime = delay;
    macbook_video.currentTime = macbook_scene_scrollPos;
}, 40)


let responsivity_timeline = new TimelineMax()

responsivity_timeline
    .to('.responsivity p', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2})
    .to('.responsivity h2', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2})
    .to('.responsivity h6', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2})
    .to('.responsivity a', 1, {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y:0, duration: 1.2});


const responsivity = document.querySelector('.responsivity');


const responsivity_scene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: responsivity,
    triggerHook: 0.8
})
.setTween(responsivity_timeline)
.addTo(controller)
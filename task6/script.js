const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);
trafficLightEl1.addEventListener('click', makeYellow);
trafficLightEl2.addEventListener('click', makeRed);

function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightEl1.style.background = ('yellow');
    trafficLightEl2.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('black');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('Red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen);
}
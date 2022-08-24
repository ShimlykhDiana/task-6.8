const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const allTrafficLights = document.querySelector('#allTrafficLights');

function makeRed() {
    trafficLightEl3.style.background = ('red');
    allTrafficLights.removeEventListener('click', makeRed);
    allTrafficLights.addEventListener('click', makeGreen);
    trafficLightEl2.style.background = ('black');
    trafficLightEl1.style.background = ('black');
}

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    allTrafficLights.removeEventListener('click', makeYellow);
    allTrafficLights.addEventListener('click', makeRed);
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('black');
}



function makeGreen() {
    trafficLightEl1.style.background = ('green');
    allTrafficLights.removeEventListener('click', makeGreen);
    allTrafficLights.addEventListener('click', makeYellow);
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
}

trafficLightEl1.addEventListener('click', makeGreen);


// function makeBlack () {
//    this.style.background = ('black');
// }
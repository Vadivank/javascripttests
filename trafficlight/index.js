const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode)

btnNode.addEventListener('click', function() {
    switchLight(trafficLightNode);
});
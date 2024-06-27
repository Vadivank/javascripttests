let targetDate = null;
let targetTime = null;
let interval = null;

function updateCountdown() {
    const currentTime = new Date();

    difference = targetDate - currentTime;

    if (difference < 0) {
        difference = Math.abs(difference);
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

document.querySelector("#date").addEventListener('input', event => {
    targetDate = new Date(event.target.value);
    if (targetTime) {
        const t = targetTime.split(':');
        targetDate.setHours(Number(t[0]));
        targetDate.setMinutes(Number(t[1]));
    } else {
        targetDate.setHours(0);
        targetDate.setMinutes(0);
    }
    clearInterval(interval);
    interval = setInterval(updateCountdown, 1000);
});

document.querySelector("#time").addEventListener('input', event => {
    targetTime = event.target.value;
    if (targetDate) {
        const t = targetTime.split(':');
        targetDate.setHours(Number(t[0]));
        targetDate.setMinutes(Number(t[1]));
        clearInterval(interval);
        interval = setInterval(updateCountdown, 1000);
    }

});

document.querySelector('.buttonClear').addEventListener('click', function () {
    targetDate = null;
    targetTime = null;

    clearInterval(interval);
    
    // document.getElementsByClassName("timer").innerText = "The event has started!";
    
    document.getElementById("time").value = null;
    document.getElementById("date").value = null;
    document.getElementById("days").innerText = null;
    document.getElementById("hours").innerText = null;
    document.getElementById("minutes").innerText = null;
    document.getElementById("seconds").innerText = null;    
});

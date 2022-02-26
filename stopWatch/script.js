// create variables of time passed
let milliseconds = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
const timerInterval = 10;       // in milliseconds
let timer = null;
let timePassed = 0;
// grab elements for timer
hoursElem = document.querySelector("#Hours");
minElem = document.querySelector("#Minutes");
secElem = document.querySelector("#Seconds");
millisecElem = document.querySelector("#Milliseconds");

// create function to format seconds
const formatTimeElapsed = function(amtOfTime, hours, minutes, seconds) {
    const numMillisecondsPerHour = 3600000;
    const numMillisecondsPerMinute = 60000;
    const numMillisecondsPerSecond = 1000;

    while (amtOfTime / numMillisecondsPerHour >= 1) {
        hours += 1;
        amtOfTime -= numMillisecondsPerHour;
    }
    while (amtOfTime / numMillisecondsPerMinute >= 1) {
        minutes += 1;
        amtOfTime -= numMillisecondsPerMinute;
    }
    while (amtOfTime / numMillisecondsPerSecond >= 1) {
        seconds += 1;
        amtOfTime -= numMillisecondsPerSecond;
    }
    time_formatted =  {
        'hours':hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        'minutes':minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        'seconds':seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}),
        'milliseconds':amtOfTime.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false}) // remaining time equals num of milliseconds
    }
    hoursElem.innerHTML = time_formatted["hours"];
    minElem.innerHTML = time_formatted["minutes"];
    secElem.innerHTML = time_formatted["seconds"];
    millisecElem.innerHTML = time_formatted["milliseconds"];
}

// make function to generate timer
const generateTimer = function(interval) {
        timePassed += interval;
        const time_formatted = formatTimeElapsed(timePassed, hours, minutes, seconds);
}

document.querySelector("#start").addEventListener("click", () => {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
    }
    timer = setInterval(generateTimer, timerInterval, timerInterval)
})

document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(timer);
})

document.querySelector("#reset").addEventListener("click", () => {
    clearInterval(timer);
    timePassed = 0;
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    formatTimeElapsed(milliseconds, hours, minutes, seconds)
})
// create variables of time passed
let milliseconds = 0;
let hours = 0
let minutes = 0
let seconds = 0

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
    return {
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds,
        'milliseconds':amtOfTime
    }
}

// get timer element

console.log(formatTimeElapsed(65013, hours, minutes, seconds))
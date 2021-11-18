// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

//Calculates the radius attribute to give to the svg circle
export function calcRadius(size, strokeWidth) {
  return size / 2 - strokeWidth * 2;
}

//Calculates circumference of circle
export function calcCircum(radius) {
  return radius * 2 * Math.PI;
}

//Calculates the dash offset to fill the progress circle with appropiate percentage
export function calcOffset(radius, percent) {
  const circum = calcCircum(radius);

  return circum - (circum * percent) / 100;
}

//Formats single digit numbers to always have two digits
export function formatNumber(int) {
  return int.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

//Takes an argument in the form of milliseconds and outputs to format MM:SS:MS
export function convertFromMs(time) {
  const milliseconds = formatNumber((time % 1000) / 10);
  const seconds = formatNumber(Math.floor((time / 1000) % 60));
  const minutes = formatNumber(Math.floor((time / (1000 * 60)) % 60));

  return `${minutes}:${seconds}:${milliseconds}`;
}

//Mapping of Timer type to tab position values
export const tabMap = {
  Stopwatch: "0em",
  Countdown: "10em",
  XY: "20em",
  Tabata: "30em",
};

//Calculates percentage based on timer type and timers given (expecting an object with second argument with times)
export function calcRoundTime(timerType, times) {
  if (timerType == "Stopwatch" || timerType == "Countdown") {
    return times.minutes * 60000 + times.seconds * 1000;
  }

  if (timerType == "XY") {
    return times.minutes * 60000 + times.seconds * 1000;
  }

  if (timerType == "Tabata") {
    if (times.roundType == "Work") {
      console.log(times.work * 1000);
      return times.work * 1000;
    } else {
      return times.rest * 1000;
    }
  }
  return 0;
}

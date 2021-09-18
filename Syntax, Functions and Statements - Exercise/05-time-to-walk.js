function calculateTime(steps, length, speed) {
  const distance = steps * length;
  const speedMetersPerSecond = speed * (5 / 18);

  const timeInSeconds =
    distance / speedMetersPerSecond + Math.floor(distance / 500) * 60;
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.round((timeInSeconds % 3600) % 60);

  const hh = hours < 10 ? `0${hours}` : hours;
  const mm = minutes < 10 ? `0${minutes}` : minutes;
  const ss = seconds < 10 ? `0${seconds}` : seconds;

  const result = `${hh}:${mm}:${ss}`;
  console.log(result);
}

calculateTime(2564, 0.7, 5.5);

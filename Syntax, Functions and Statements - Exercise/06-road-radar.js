function radar(speed, area) {
  let speedLimit;
  if (area == "motorway") {
    speedLimit = 130;
  } else if (area == "interstate") {
    speedLimit = 90;
  } else if (area == "city") {
    speedLimit = 50;
  } else {
    speedLimit = 20;
  }

  let result;
  if (speed <= speedLimit) {
    result = `Driving ${speed} km/h in a ${speedLimit} zone`;
  } else {
    const difference = speed - speedLimit;
    result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit}`;

    if (difference <= 20) {
      result = result.concat(" - speeding");
    } else if (difference <= 40) {
      result = result.concat(" - excessive speeding");
    } else {
      result = result.concat(" - reckless driving");
    }
  }

  console.log(result);
}

radar(40, "city");
radar(21, "residential");
radar(120, "interstate");
radar(200, "motorway");

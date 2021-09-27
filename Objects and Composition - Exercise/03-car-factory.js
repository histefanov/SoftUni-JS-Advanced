function assemble(params) {
  const engines = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  };

  const carriages = {
    hatchback: { type: "hatchback", color: null },
    coupe: { type: "coupe", color: null },
  };

  let engine = null;

  if (params.power > 120) {
    engine = engines["Monster engine"];
  } else if (params.power > 90) {
    engine = engines["Normal engine"];
  } else {
    engine = engines["Small engine"];
  }

  const car = {
    model: params.model,
    engine: engine,
    carriage: { type: params.carriage, color: params.color },
    wheels: Array(4).fill(
      params.wheelsize % 2 != 0 ? params.wheelsize : params.wheelsize - 1
    ),
  };

  return car;
}

console.log(
  assemble({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);

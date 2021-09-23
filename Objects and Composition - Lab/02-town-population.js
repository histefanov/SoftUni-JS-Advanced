function townPopulation(data) {
  const registry = {};

  for (const town of data) {
    const [townName, population] = town.split(" <-> ");

    if (!registry[townName]) {
      registry[townName] = 0;
    }

    registry[townName] += Number(population);
  }

  for (const town in registry) {
    console.log(`${town} : ${registry[town]}`);
  }
}

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);

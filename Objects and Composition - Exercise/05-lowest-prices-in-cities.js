function getLowestPrices(data) {
  const items = {};

  for (const entry of data) {
    let [town, item, price] = entry.split(" | ");
    price = Number(price);

    if (!items[item]) {
      items[item] = {};
    }
    items[item][town] = price;
  }

  const result = [];

  for (const item in items) {
    const sorted = Object.keys(items[item]).sort(
      (a, b) => items[item][a] - items[item][b]
    );

    const town = sorted[0];

    result.push(`${item} -> ${items[item][town]} (${town})`);
  }

  return result.join("\n");
}

console.log(
  getLowestPrices([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000",
  ])
);

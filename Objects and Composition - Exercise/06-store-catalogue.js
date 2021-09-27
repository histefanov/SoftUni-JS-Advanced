function sortedCatalogue(data) {
  const catalogue = {};

  for (const entry of data) {
    let [item, price] = entry.split(" : ");
    price = Number(price);
    const initial = item[0];

    if (!catalogue[initial]) {
      catalogue[initial] = {};
    }
    catalogue[initial][item] = price;
  }

  const keys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

  for (const key of keys) {
    console.log(key);

    Object.keys(catalogue[key])
      .sort((a, b) => a.localeCompare(b))
      .forEach((name) => console.log(`  ${name}: ${catalogue[key][name]}`));
  }
}

sortedCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

function json(data) {
  const [town, latitude, longitude] = data[0]
    .split("|")
    .filter((item) => item)
    .map((item) => item.trim());

  const result = [];

  for (let i = 1; i < data.length; i++) {
    const entries = data[i].split("|").filter((item) => item);

    const obj = {};

    obj[town] = entries[0].trim();
    obj[latitude] = Number(Number(entries[1].trim()).toFixed(2));
    obj[longitude] = Number(Number(entries[2].trim()).toFixed(2));

    result.push(obj);
  }

  return JSON.stringify(result);
}

console.log(
  json([
    "|     Town | Latitude  |     Longitude  |  ",
    "|Veliko Turnovo|43.0757|25.6172|",
    "| Monatevideo | 34.50 | 56.11 |",
  ])
);

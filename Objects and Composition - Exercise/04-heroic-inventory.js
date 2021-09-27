function registry(input) {
  const result = [];

  for (const item of input) {
    const [name, level, items] = item.split(" / ");
    itemsArray = items ? items.split(", ") : [];

    result.push({ name, level: Number(level), items: itemsArray });
  }

  return JSON.stringify(result);
}

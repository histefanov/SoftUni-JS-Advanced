function solve(props) {
  const products = {};
  for (let i = 0; i < props.length; i += 2) {
    products[props[i]] = Number(props[i + 1]);
  }
  return products;
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

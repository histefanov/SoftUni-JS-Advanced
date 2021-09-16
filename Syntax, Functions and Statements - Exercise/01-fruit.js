function fruit(name, weight, price) {
  const weightInKilograms = weight / 1000;
  const finalPrice = weightInKilograms * price;

  console.log(
    `I need $${finalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(
      2
    )} kilograms ${name}.`
  );
}

fruit("orange", 2500, 1.8);

function cook(...params) {
  let dish = Number(params[0]);

  for (let i = 1; i < params.length; i++) {
    switch (params[i]) {
      case "chop":
        dish /= 2;
        break;
      case "dice":
        dish = Math.sqrt(dish);
        break;
      case "spice":
        dish += 1;
        break;
      case "bake":
        dish *= 3;
        break;
      case "fillet":
        dish *= 0.8;
        break;
    }
    console.log(dish.toFixed(1));
  }
}

cook("9", "dice", "spice", "chop", "bake", "fillet");

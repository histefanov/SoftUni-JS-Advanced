function evenPos(arr) {
  console.log(arr.filter((el, index) => index % 2 === 0).join(" "));
}

evenPos(["20", "30", "40", "50", "60"]);

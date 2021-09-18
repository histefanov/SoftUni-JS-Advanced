function previousDay(year, month, day) {
  const date = new Date(year, month - 1, day - 1);

  const previousDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  console.log(previousDate);
}

previousDay(2016, 9, 30);

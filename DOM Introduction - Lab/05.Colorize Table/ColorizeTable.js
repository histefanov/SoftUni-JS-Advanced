function colorize() {
  const table = document.getElementsByTagName("table")[0];
  const rows = table.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i += 2) {
    rows[i].style.backgroundColor = "teal";
  }
}

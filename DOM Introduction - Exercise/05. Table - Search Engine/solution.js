function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const searchField = document.getElementById("searchField");

    const tableRows = Array.from(
      document.querySelector("table tbody").children
    );

    for (const row of tableRows) {
      row.classList.remove("select");

      const cells = Array.from(row.children);

      if (cells.some((cell) => cell.textContent.includes(searchField.value))) {
        row.classList.add("select");
      }
    }

    searchField.value = "";
  }
}

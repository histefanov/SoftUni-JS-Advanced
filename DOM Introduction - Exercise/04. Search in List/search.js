function search() {
  const towns = Array.from(document.getElementById("towns").children);
  const searchPattern = document.getElementById("searchText").value;
  let matches = 0;

  for (const town of towns) {
    town.style.fontWeight = "normal";
    town.style.textDecoration = "none";

    if (town.textContent.includes(searchPattern)) {
      matches++;
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
    }
  }

  document.getElementById("result").textContent = `${matches} matches found`;
}

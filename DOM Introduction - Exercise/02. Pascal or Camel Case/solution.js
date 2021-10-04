function solve() {
  const text = document.getElementById("text").value;
  const namingConv = document.getElementById("naming-convention").value;
  let result;

  if (namingConv == "Camel Case") {
    result = text.split(" ");
    result[0] = result[0].toLowerCase();

    for (let i = 1; i < result.length; i++) {
      const word = result[i];
      result[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    result = result.join("");
  } else if (namingConv == "Pascal Case") {
    result = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("");
  } else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}

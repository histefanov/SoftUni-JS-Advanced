function solve() {
  const text = document.getElementById("input").value;
  const output = document.getElementById("output");
  const sentences = text
    .split(".")
    .filter((sentence) => sentence)
    .map((sentence) => sentence + ".");

  for (let i = 0; i < sentences.length; i++) {
    if (i % 3 == 0) {
      output.appendChild(document.createElement("p"));
    }
    output.lastElementChild.innerHTML += sentences[i];
  }
}

function extractText() {
  const children = document.querySelectorAll("#items li");
  const result = [];

  for (const child of children) {
    result.push(child.textContent);
  }

  document.getElementById("result").textContent = result.join("\n");
}

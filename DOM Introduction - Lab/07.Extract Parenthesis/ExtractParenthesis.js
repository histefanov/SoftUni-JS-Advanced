function extract(content) {
  const text = document.getElementById(content).textContent;
  const pattern = /\(([^()]+)\)/g;
  const matches = [...text.matchAll(pattern)].map((a) => a[1]);
  console.log(matches.join("; "));
  return matches.join("; ");
}

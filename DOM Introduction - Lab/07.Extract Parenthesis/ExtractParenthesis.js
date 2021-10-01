function extract(content) {
  const matches = [...content.matchAll(/\(([^()]+)\)/g)].map((a) => a[1]);
  console.log(matches);
}

function extract(text) {
  const words = [...text.matchAll(/\w+/g)].map((el) => el[0].toUpperCase());
  console.log(words.join(", "));
}

extract("Hi, how are you?");

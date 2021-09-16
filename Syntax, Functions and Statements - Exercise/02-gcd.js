function gcd(a, b) {
  if (!b) {
    console.log(a);
    return;
  }

  return gcd(b, a % b);
}

gcd(40, 30);

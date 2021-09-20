function pieceOfPie(pies, firstPie, secondPie) {
  return pies.slice(pies.indexOf(firstPie), pies.indexOf(secondPie) + 1);
}

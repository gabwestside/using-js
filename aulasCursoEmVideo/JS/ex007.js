function tripliqueAsChances(chances) {
  var chances = [2, 5, 10, 25];
  var resultados = [];

  for (var index = 0; index < chances.length; index++) {
    var vezesTres = chances[index] * 3;
    resultados.push(vezesTres);
  }
  return resultados;
}

console.log(tripliqueAsChances());

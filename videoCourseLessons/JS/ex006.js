function vezesLetraAparece(frase, letra) {
  var resultado = 0;

  for (var indiceLetra = 0; indiceLetra < frase.length; indiceLetra++) {
    if (frase[indiceLetra] === letra) {
      resultado++;
    }
  }

  return resultado;
}

console.log(vezesLetraAparece("shell gostosa", "s"));

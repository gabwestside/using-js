var numero = 1;
var outroNumero = 2;
var operacao = "+";

function calculadoraAdicaoSubtracao(operacao, value1, value2) {
  if (operacao == "+") {
    return value1 + value2;
  } else if (operacao == "-") {
    return value1 - value2;
  } else {
    return 0;
  }
}

console.log(
  "O resultado é",
  calculadoraAdicaoSubtracao(operacao, numero, outroNumero)
);

function alertMensage() {
  alert("Seu script está funcionando!");
}

// Funcão que é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2;
}

const copo = fazerSuco("banana", "maça");

console.log(copo);

// function scope

let subject = "create a system";

function createThink(subject) {
  subject = "study";
  return subject;
}

console.log(createThink(subject));
console.log(subject);

// function hoisting

sayMyName();

function sayMyName() {
  console.log("Gabs");
}

// arrow function

const sayMyNickName = (nome) => {
  console.log(nome);
};

sayMyNickName("Westside");

// callback function

function sayMyAliasName(alias) {
  console.log(alias);
}

sayMyAliasName(() => {
  console.log("testando callback function.");
});

/*
    function() constructor

    # expressão new
    # criar um novo objeto
    # this keyword
*/

function Person(nombre) {
  this.nombre = nombre;
  this.walk = function () {
    return this.nombre + " está andando";
  };
}

const gab = new Person("Gab");
const sid = new Person("Sid");
console.log(gab.walk());
console.log(sid.walk());

let date = new Date("2021-06-16");

console.log(date);

console.log('------------------------nova função------------------------');

function Multiplicar(x, y) {
  return x * y;
}

const resultado = Multiplicar(10, 2); // Resultado recebe a soma de 10 + 2
console.log(`O resultado = ${resultado}`);

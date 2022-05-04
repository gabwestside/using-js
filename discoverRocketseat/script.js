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

// Manipulando Strings

// toLowerCase and toUpperCase

let word = "Progamar é muito bom!"

console.log(
  word
    .toUpperCase()
    .toUpperCase()
  );

// Manipulando Strings e Arrays

let phrase = "Eu quero viver o Amor!"
let myArr = phrase.split(" ")
let phraseWithUnderscore = myArr.join("_")
console.log(phraseWithUnderscore.toUpperCase())

// Verificar se o texto contém a palavra Amor

let phraseAboutLove = "I want to live the love!"
console.log(phraseAboutLove.includes("love"))

// Criar Array com construtor

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um array
console.log([
  "a",
  {type: "array"},
  function() { return "alo" }
].length);

// Transformar uma cadeia de caracteres em elementos de um
// array

let wordStudy = "manipulação"
console.log(Array.from(word))

// Manipulando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('node.js')

// adicionar no começo
techs.unshift('sql')

// remover do fim
techs.pop()

// remover do fim
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1,2))

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 0)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)

console.log('------------------------nova função------------------------');

// Expressões e Operadores

// Operators Ternary

let number = 1

console.log(number ? 'Hi' : 'Bye');

// Espression new

let nameGab = new String('Gab')
nameGab.surName = 'Westside'

let age = new Number(23)
console.log(nameGab.surName, age)

// Unary operators => typeof and delete

const person = {
  nameTo: 'Gabriel',
  age: 25,
}

console.log(typeof 'gab'); // serve para saber o tipo

delete person.age

console.log(person);

// Arithmetics Operators

console.log(3.2 * 5.5); // multiplication

console.log(12 / 2); // division

console.log(33 + 67); // addition

console.log(34 - 24); // subtraction

let remainder = 11 % 10
console.log(remainder); // division remainder

let increment = 0
increment++ 
console.log(increment); // increment ++

let decrement = 0
decrement--
console.log(decrement); // decrement --

console.log(2 ** 3); // exponential **

// Grouping operator ( )

let total = (2 + 3) * 5
console.log(total);

// Estritamente igual === diferente !==

let one = 1
let two = 2

console.log(one === "1");

console.log(one === 1);

console.log(two !== "2");

console.log(two !== 2);

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Examples: Nice breakfast
let bread = true
let cheese = true

const niceBreakfast = bread && cheese 
  ? 'Awesome breakfast' 
  : 'Bad breakfast'

console.log(niceBreakfast);

// High then 180 
let ageTo = 16

const canDrive = ageTo >= 18
  ? 'Can drive'
  : `Can't drive`

console.log(canDrive);

/* 
  ## Operator precedence

  -grouping                          ( )      
  -negation and increment            ! ++ --
  -multiplication and division       * /
  -relational                        < <= > >=
  -equality                          == != === !==
  -AND                               &&
  -OR                                ||
  -conditional                       ?:
  -assignment                        == += -= *=

*/

console.log('------------------------new function------------------------');

// if...else

let temperature = 36,
  highTemperature = temperature >= 37.5,
  mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature)
  console.log('High fever')

else if (mediumTemperature) 
  console.log('Moderated fever')

else 
  console.log('Healthy')

// switch
function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
  
    case '-':
      result = number1 - number2
      break

    case '*':
      result = number1 * number2
      break

    case '/':
      result = number1 / number2
      break
  
    default:
      console.log('not implemented')
      break
  }
}

console.log(calculate(4, '-', 2));

// throw
function sayMyName(name = '') {
  if (name === '') {
    //throw new Error("Name's required")
  }
  console.log(name)
}

// try catch
try {
  sayMyName('Gabriel')
} catch (e) {
  console.log(e)
}

// Loop -> for
for (let i = 0; i < 5; i++) {
  if (i === 0)
    continue
  
  if (i === 4)
    break

  console.log(i)
}

// Loop -> while
let i = 1000
while (i >= 10) {
  console.log(i)

  i /= 10
}

// Loop -> for...of
let names = ['Gab', 'West', 'Side']
for (let name of names) {
  console.log(name)
}

// Loop -> for...in
let personOne = {
  name: 'Gab',
  age: 24,
  height: `6'0`,
  weight: 182.98
}

console.log()

for (let property in personOne) {
  console.log(property)
  console.log(personOne[property])
}

console.log();
console.log('<----Exercises---->');
console.log();

// Exercises
function getScore(score) {
  let finalScore,
    scoreA = score >= 90 && score <= 100,
    scoreB = score >= 80 && score < 90,
    scoreC = score >= 70 && score < 80,
    scoreD = score >= 60 && score < 70,
    scoreF = score < 60 && score > 0

  switch (score) {
    case scoreA:
      finalScore = 'A'
      break
    
    case scoreB:
      finalScore = 'B'   
      break

    case scoreC:
      finalScore = 'C'
      break

    case scoreD:
      finalScore = 'D'
      break  

    case scoreF:
      finalScore = 'F'
      break 
      
    default:
      console.log('Invalid score')
      break
  }
  return finalScore
}

console.log(getScore(90)) 
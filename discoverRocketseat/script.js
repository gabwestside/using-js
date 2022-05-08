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
console.log('<----Exercise1---->'); // Sistema de notas escolares
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

console.log()
console.log('<----Exercise2---->'); // Fluxo de caixa de finanças
console.log()

let finances = {
  incomes: [
    1400,
    2000,
    3500,
    2200
  ],
  outcomes: [
    850,
    1600,
    2120,
    1150
  ]
}

function sum(arr) {
  let total = 0

  for (var value of arr) {
    total += value
  }

  return total
}

function totalCosts() {
  const totalIncomes = sum(finances.incomes)
  const totalOutcomes = sum(finances.outcomes)

  const total = totalIncomes - totalOutcomes

  const itsOk = total >= 0

  let financesMessage = 'negative'

  if (itsOk) financesMessage = 'positive'

  console.log(`Your current balance is ${financesMessage}, with $${total.toFixed(2)}`)
}

totalCosts()

console.log()
console.log('<----Exercise3---->'); // Celcius to fahrenheit
console.log()

function transformDegree(degree) {
  const celcius = degree.toUpperCase().includes('C')
  const fahrenheit = degree.toUpperCase().includes('F')

  if (!celcius && !fahrenheit) {
    throw new Error('Unkown degree')
  }  

  let updateDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahrenheit => (fahrenheit - 32) * (5/9)
  let degreeSing = 'C'

  if(celcius) {
    updateDegree = Number(degree.toUpperCase().replace('C', ''))
    formula = celcius => (celcius * (9/5)) + 32
    degreeSing = 'F'
  }

  return formula(updateDegree).toFixed(1) + degreeSing
}

try {
  console.log(transformDegree('100f'))
  console.log(transformDegree('20C'))
  transformDegree('70v')
} catch (error) {
  console.log(error.message);
}

console.log()
console.log('<----Exercise4---->'); // 
console.log()

/*
   ## Buscandoecontando dados em Arrays 0##

  Baseado no Array de Livros por Categoria abaixo, faça os seguintes
  desafios:

    •Contar o número de categorias e o número de livros em cada 
    categoria
    •Contar o número de autores
    •Mostrar livros do autor Auguto Cury
    •Transformar a função acima em uma função que irá receber o nome 
    do autor e devolver os livros desse autor.
*/

const booksByCategory=[
  {
    nameCategory: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "0 homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. KiyosakieSharon L. Lechter",
      },
    ],
  },
  {
    nameCategory: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ]
  },
];

const totalCategories = booksByCategory.length

console.log('Total number of category:')
console.log(totalCategories)

for (let category of booksByCategory) {
  console.log('Total books of category:', category.nameCategory)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log("Total authors: ", authors.length)
}

countAuthors()

function booksOfAusgustoCury() {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === 'Augusto Cury') {
        books.push(book.title)
      }
    }
  }

  console.log("Author's books: ", books)
}

booksOfAusgustoCury()

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  console.log(`${author}'s books: ${books.join(", ")}`)
}

booksOfAuthor('Stephen R. Covey')
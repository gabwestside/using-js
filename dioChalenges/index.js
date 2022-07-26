const myMap = new Map();

myMap.set("apple", "fruit");
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// "fruit"

myMap.delete("apple");
// true

myMap.get("apple");
// undefined

const mySet = new Set();

mySet.add(1);

mySet.add(2);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);

function getAdmins(map) {
  let admins = [];

  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }

  return admins;
}

function getUsers(map) {
  let users = [];

  for ([key, value] of map) {
    if (value === "User") {
      users.push(key);
    }
  }

  return users;
}

const usuarios = new Map();

usuarios.set("Gabriel", "Admin");

usuarios.set("Ana", "User");

usuarios.set("Victoria", "Admin");

usuarios.set("Luiz", "User");

usuarios.set("José", "User");

usuarios.set("Pedro", "user");

console.log(getAdmins(usuarios));

console.log(getUsers(usuarios));

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet];
}

console.log(valoresUnicos(meuArray));

// return and throw

// using return
function palindromeVerify(string) {
  if (!string) return "Invalid string";

  return string === string.split("").reverse().join("");
}

palindromeVerify("cat");

console.log(palindromeVerify);

function palindromeIsOk(string) {
  if (!string) throw "Invalid string";

  return string === string.split("").reverse().join("");
}

// palindromeIsOk('');

function tryCatchExample(string) {
  try {
    palindromeIsOk(string);
  } catch (e) {
    throw e;
  } finally {
    console.log("A string enviada foi: " + string);
  }
}

// construindo o Objeto error => new Error(message, fileName, lineNumber)

const MyError = new Error("Mensagem Inválida");
MyError.name = "Invalid<essage";

// throw MyError;

// practice error

function validateArray(arr, num) {
  try {
    if (!arr && !num) 
      throw new ReferenceError("Send paramenters");

    if (typeof arr !== "object")
      throw new TypeError("Array needs to be object type");

    if (typeof num !== "number")
      throw new TypeError("Num needs to be number type");

    if (arr.length !== num)
      throw new RangeError("invalid lenght");

    return arr;

  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("This is a ReferenceError");

      console.log(e.message);

    } else if (e instanceof TypeError) {
      console.log("This is a TypeError");
      
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("This is a RangeError");
      
      console.log(e.message);
    } else {
      console.log("Error type unkown: " + e);
    }
  }
}

console.log(validateArray());

console.log(validateArray([], 5));

console.log(validateArray([1,2,3,4,5,6,7], 5));

console.log('--------------')



const myMap = new Map();

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get('apple');
// "fruit"

myMap.delete('apple');
// true

myMap.get('apple');
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

    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

function getUsers(map) {
    let users = [];

    for([key, value] of map) {
        if(value === 'User') {
            users.push(key);
        }
    }

    return users;
}

const usuarios = new Map();

usuarios.set('Gabriel', 'Admin');

usuarios.set('Ana', 'User');

usuarios.set('Victoria', 'Admin');

usuarios.set('Luiz', 'User');

usuarios.set('José', 'User');

usuarios.set('Pedro', 'user');

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

    return string === string.split('').reverse().join('');
}

palindromeVerify('cat');

console.log(palindromeVerify);

function palindromeIsOk(string) {
    if (!string) return "Invalid string";

    return string === string.split('').reverse().join('');
}

palindromeIsOk('cat');

console.log(palindromeIsOk);
const myMap = new Map();

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get(apple);
// "fruit"

myMap.delete('apple');
// true

myMap.get(apple);
// undefined

const mySet = new Set();

mySet.add(1);
mySet.add(2);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5);


let prompt = require('prompt-sync')();

let a = prompt ('Introduzca a: ');
let b = prompt ('Introduzca b: ');
let suma, resta, mul, div;
a = Number(a);
b = Number(b);
suma = (a + b);
resta = (a - b)
mul = (a * b)
div = (a / b)

console.log(`La suma de ${a} + ${b} es : ${suma}`);
console.log(`La resta de ${a} - ${b} es : ${resta}`);
console.log(`La división de ${a} / ${b} es : ${div}`);
console.log(`La multiplicacion de ${a} * ${b} es : ${mul}`);
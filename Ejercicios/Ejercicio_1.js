let prompt = require('prompt-sync')();

let a = prompt ('Introduzca a: ');

let b = prompt ('Introduzca b: ');


let bTemporal = b;

b = a;

a = bTemporal;

console.log(`a = ${a}, b = ${b}`);
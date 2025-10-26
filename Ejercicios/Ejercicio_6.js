let prompt = require('prompt-sync')();

let niñas, niños, total;

niñas = Number(prompt(`Dime el numero de niñas que hay en la escuela: `));
niños = Number(prompt(`Dime el numero de niños que hay en la escuela: `));

total = niños + niñas;

let porcentajeniños = (niños * 100) / total
let porcentajeniñas = (niñas * 100) / total

console.log(`El porcentaje de niños es del ${porcentajeniños}% y el de niñas es del ${porcentajeniñas}%`);
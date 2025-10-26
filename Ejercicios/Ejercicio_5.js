let prompt = require('prompt-sync')();

let num1;

num1 = Number(prompt(`Dime un numero: `));

if (num1 <= 0 ){

    console.log(`Error, el numero no puede ser menor o igual a 0`);

}else {

    console.log(`Del numero ${num1}, su potencia es ${num1*num1} y su raiz es ${Math.sqrt(num1)}`);
   
}       
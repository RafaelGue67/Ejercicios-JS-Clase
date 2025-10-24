let prompt = require('prompt-sync')();

let a, b, c;

a = Number(prompt('Dime el primer numero: '));
b = Number(prompt('Dime el segundo numero: '));
c = Number(prompt('Dime el tercero numero: '));

if (Number.isNaN(a && b && c)){
    console.log("Los valores introducidos no son numeros");

    
}else {
        let res;
        if (a < 0) {
            res = (a * b * c);

            console.log(`El resultado de la multiplicacion de ${a} * ${b} * ${c} el igual a: ${res}`);
        }else{
            res = (a + b + c);

            console.log(`El resultado de la multiplicacion de ${a} + ${b} + ${c} el igual a: ${res}`);

        }

    }
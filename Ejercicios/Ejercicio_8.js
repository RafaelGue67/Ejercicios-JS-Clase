let prompt = require('prompt-sync')();

let num;

num = Number(prompt("Dime un numero: "));

if (num == 0){

    console.log("El numero no es par ni impar");

}else{

    if(num % 2 == 0){

        console.log("El numero es par"); 

    }else{

        console.log("El numero es impar");

    }

}
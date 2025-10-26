let prompt = require('prompt-sync')();

let bachiller,pruebaacc;

bachiller = String(prompt("Tienes el bachiller?: "));

if (bachiller === "si" || bachiller === "Si"){

    console.log("Puedes acceder al grado superior, enhorabuena");

}else{

    pruebaacc = String(prompt("Has aprobado la prueba de acceso?: "));

    if (pruebaacc === "si" || pruebaacc === "Si"){

        console.log("Puedes acceder al grado superior, enhorabuena");

    }else{

        console.log("Lo siento, no puedes acceder a el grado superior");

    }

}
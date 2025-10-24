var prompt = require('prompt-sync')();

let edad =Number(prompt('Introduzca la edad:'));
console.log((edad));

if ( edad >= 18 ) {

    //Define la variable como ambito bloque, es decir, 
    //carnet solo va a vivir en memoria mientras se ejecuta
    //el codigo del bloque en que se define, en este caso,
    //dentro de la condición.
    let carnet = prompt ('Tienes carnet?(S/N)');

    if (carnet=== 'S') {

        console.log ('Puedes conducir');

    }   else {
        console.log('No puedes condusi');
    }


}   else {
    console.log('No puedes condusi');
}
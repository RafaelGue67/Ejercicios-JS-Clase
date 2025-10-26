let prompt = require('prompt-sync')();

let dia, nummes, año, mes;

dia = Number(prompt("Dime el dia en el que estamos "));

nummes = Number(prompt("Dime el mes en el que estamos "));

año = Number(prompt("Dime el año en el que estamos "));

if (dia < 31 & nummes < 12 & año > 0){

    switch(nummes){

        case 1:
            mes = "Enero"
        case 2:
            mes = "Febrero"
        case 3:
            mes = "Marzo"
        case 4:
            mes = "Abril"
        case 5:
            mes = "Mayo"
        case 6:
            mes = "Junio"
        case 7:
            mes = "Julio"
        case 8:
            mes = "Agosto"
        case 9:
            mes = "Septiembre"
        case 10:
            mes = "Octubre"
        case 11:
            mes = "Nomviembre"
        case 12:
            mes = "Diciembre"
    }

    console.log(`${dia} de ${mes} de ${año}`);
}else{

    console.log("Error");

}
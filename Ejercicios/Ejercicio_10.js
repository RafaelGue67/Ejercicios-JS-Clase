let prompt = require('prompt-sync')();

let dia, nummes, año, mes;

dia = Number(prompt("Dime el dia en el que estamos "));

nummes = Number(prompt("Dime el mes en el que estamos "));

año = Number(prompt("Dime el año en el que estamos "));

if (dia < 31 & nummes < 12 & año > 0){

    if (nummes == 1){
        mes = "Enero"
    }else if (nummes == 2){
        mes = "Febrero"
    }else if (nummes == 3){
        mes = "Marzo"
    }else if (nummes == 4){
        mes = "Abril"
    }else if (nummes == 5){
        mes = "Mayo"
    }else if (nummes == 6){
        mes = "Junio"
    }else if (nummes == 7){
        mes = "Julio"
    }else if (nummes == 8){
        mes = "Agosto"
    }else if (nummes == 9){
        mes = "Septiembre"
    }else if (nummes == 10){
        mes = "Octubre"
    }else if (nummes == 11){
        mes = "Noviembre"
    }else if (nummes == 12){
        mes = "Diciembre"
    }
    console.log(`${dia} de ${mes} de ${año}`);
}else{

    console.log("Error");

}
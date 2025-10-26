let prompt = require('prompt-sync')();

let mes, importe, porcentaje;

mes = String(prompt(`Dime un mes: `));

importe = Number(prompt(`Dime el importe de la compra: `));

if (mes === "Octubre"){

    porcentaje = importe * 0.15;

    console.log(`Tu precio aplicando el 15% de descuento se quedaria en: ${importe - porcentaje}`)
    

}else{
    console.log(`No tienes descuento`)
}

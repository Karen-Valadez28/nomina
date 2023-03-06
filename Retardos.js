class Retardos {
    horaEntrada;
    checada;
    descuento;
    constructor(hE,checada){
        this.horaEntrada= hE;
        this.checada=checada;
    }
calcularDescuento= function(){ 
    //CALCULO DE HORAS
var hE= new Date("February 12, 2014 03:29:01");
var checada = new Date("February 12, 2014 03:28:56");
//La diferencia se da en milisegundos así que debes dividir entre 1000
var descuento = ((hE- checada)/1000);
console.log( descuento) // resultado 5;


var hora1 = ("04:29:01").split(":"),
    hora2 = ("03:28:56").split(":"),
    t1 = new Date(),
    t2 = new Date();
 
t1.setHours(hora1[0], hora1[1], hora1[2]);
t2.setHours(hora2[0], hora2[1], hora2[2]);
 
//Aquí hago la resta
t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
 
//Imprimo el resultado
//document.body.innerHTML = "La diferencia es de: " + (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : "") + (t1.getMinutes() ? ", " + t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos" : " minuto") : "") + (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? " y " : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? " segundos" : " segundo") : "");
console.log("La diferencia es de: " + (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : "") + (t1.getMinutes() ? ", " + t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos" : " minuto") : "") + (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? " y " : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? " segundos" : " segundo") : ""));


    }
}
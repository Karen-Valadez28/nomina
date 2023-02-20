class Retardos {
    horaEntrada;
    checada;
    descuento;
    constructor(hE,checada){
        this.horaEntrada= hE;
        this.checada=checada;
    }
calcularDescuento= function(){
    //convertir en objeto de fecha y hora
     let hE = '2023-02-16 10:00:00';
     let checada = '2023-02-16 10:10:00';

     const momenthE = moment(hE);
     const momentchecada = moment(checada);


    let diferenciaEnMinutos = momenthE.diff(momenthE, "minutos");
    console.log (diferenciaEnMinutos) //10

    let tiempoAtencion =  moment()
    .set("Horas", 0)
    .set("Minutos", diferenciaEnMinutos) 
    .set ("Segundos",0)
    .format("HH:mm:ss")
    console.log(tiempoAtencion)
}

}
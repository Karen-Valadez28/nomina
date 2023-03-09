class Sueldo{

    HorasTrabajadas;
    PeriodoPago;
    SueldoxHora;
    TiempoExtra;
    Bonos;
    pagoporhora;

    constructor(HorasTra, pagporho){
        this.HorasTrabajadas = HorasTra;
        this.pagoporhora = pagporho;
        
    }

    sueldo= function(){
        var sueldo= this.HorasTrabajadas*this.pagoporhora;
       return sueldo;

    }
};  
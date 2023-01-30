class Persona{
 
    nombre;
    apellido;
    edad;
    #curp;
    #rfc;
    telefono;
    correo;
    #NSS;
    constructor(){

    }

}

class Sueldo{

    HorasTrabajadas;
    PeriodoPago;
    SueldoxHora;
    TiempoExtra;
    Bonos;

    constructor(){
        
    }
}

class Banco{
    ComprobanteDomicilio;
    NumCuenta;
    TipoBanco ;
    Beneficiarios;

    constructor(ComprobanteDomicilio, NumCuenta,TipoBanco,Beneficiarios){

        this.ComprobanteDomicilio;
        this.NumCuenta= NuC;
        this.TipoBanco= TiB;
        this.Beneficiarios= Ben;
    }
}


class Retardos {
    horaEntrada;
    descuento;
    constructor(hE, desc){
        this.horaEntrada= hE;
        this.descuento=desc;
    }

}

class TrabajadoresAreas{
    puesto;
    experiencia;
    antiguedad;
    profesion;
    periodoContrato;
    horario;
    constructor(pues,exp,antig,prof,perCon,hora){
        this.puesto= pues;
        this.experiencia= exp;
        this.antiguedad=antig;
        this.profesion=prof;
        this.periodoContrato=perCon;
        this.horario=hora;
    
    }
}




class Administradores{
    
}
class Faltas{
    FechaFalta;
    Motivo;
    Justificacion;

    constructor(FechaFalta, Motivo, Justificacion){
    
    
        this.FechaFalta= Fal;
        this.Motivo= Mo;
        this.Justificacion= Just;
    }
}
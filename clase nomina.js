class Persona{
 
    nombre;
    apellido;
    edad;
    #curp;
    #rfc;
    telefono;
    correo;
    #NSS;
    constructor(name,apell,edad,curp,rfc,phone,correo,address){
       this.nombre=name;
       this.apellido=apell;
       this.edad=edad;
       this.curp=curp;
       this.rfc=rfc;
       this.telefono=phone;
       this.correo=correo;
       this.direccion=address;
    }

}

class Sueldo{

    HorasTrabajadas;
    PeriodoPago;
    SueldoxHora;
    TiempoExtra;
    Bonos;

    constructor(HorasTra,PeriodPago,SueldoExt,Timextra,bonos){
        this.HorasTrabajadas=HorasTra;
        this.PeriodoPago=PeriodPago;
        this.SueldoxHora=SueldoExt;
        this.TiempoExtra=Timextra;
        this.Bonos=bonos;
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

imprimirInformacionLaboral() 
    return `Puesto: ${this.getPuesto()}`
      ,`Experiencia: ${this.getExperiencia()}`
      ,`Antigüedad: ${this.getAntiguedad()}`
      ,`Profesión: ${this.getProfesion()}`
       ,`Periodo de contrato: ${this.getPeriodoContrato()}`
       ,`Horario: ${this.getHorario()}`;


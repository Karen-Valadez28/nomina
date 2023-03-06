
class Falta{
    FechaFalta;
    Motivo;
    Justificacion;

    constructor(Fal, Mo, Just){
    
    
        this.FechaFalta= Fal;
        this.Motivo= Mo;
        this.Justificacion= Just;
    }

    imprimirInformacionFalta() {
        console.log(`Fecha de falta: ${this.FechaFalta}`);
        console.log(`Motivo de la falta: ${this.Motivo}`);
        if (this.Justificacion) {
          console.log(`Justificación: ${this.Justificacion}`);
        } else {
          console.log(`Justificación: Pendiente`);
        }
    }
    
}


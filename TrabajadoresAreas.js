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
    actualizarHorario(nuevoHorario) {
        this.horario = nuevoHorario;
    }
    imprimirInformacionLaboral() {
        console.log(`Puesto: ${this.getPuesto()}`);
        console.log(`Experiencia: ${this.getExperiencia()}`);
        console.log(`Antigüedad: ${this.getAntiguedad()}`);
        console.log(`Profesión: ${this.getProfesion()}`);
        console.log(`Periodo de contrato: ${this.getPeriodoContrato()}`);
        console.log(`Horario: ${this.getHorario()}`);
    }
}
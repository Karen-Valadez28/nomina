class TrabajadoresAreas{
    puesto;
    experiencia;
    antiguedad;
    profesion;
    periodoContrato;
    horario;
    areaTrabajo;
     salario;
    constructor(pues,exp,antig,prof,perCon,hora,area,salario){
        this.puesto= pues;
        this.experiencia= exp;
        this.antiguedad=antig;
        this.profesion=prof;
        this.periodoContrato=perCon;
        this.horario=hora;
        this.areaTrabajo = area;
        this.salario = salario;
    
    }
    actualizarHorario(nuevoHorario) {
        this.horario = nuevoHorario;

    }
    
       //  calcular el salario neto de un trabajador
     calcularSalarioNeto() {
      const impuestos = this.salario * 0.1; // Suponiendo que se paga un 10% de impuestos
      const seguroSocial = this.salario * 0.05; // Suponiendo que se paga un 5% de seguro social
       return this.salario - impuestos - seguroSocial;
    }


       //  verificar si un trabajador tiene derecho a vacaciones
    tieneDerechoVacaciones() {
        return this.antiguedad >= 1; //  si tiene derecho a vacaciones después de un año de antigüedad
    }

         // Método para imprimir la información del trabajador
        imprimirInformacion() {
        return `Puesto: ${this.puesto}`
          ,`Experiencia: ${this.experiencia} años`
          ,`Antigüedad: ${this.antiguedad} años`
          ,`Profesión: ${this.profesion}`
          ,`Periodo de contrato: ${this.periodoContrato}`
          ,`Horario: ${this.horario}`
          ,`Área de trabajo: ${this.areaTrabajo}`
          ,`Salario: $${this.salario}`;
        }
}






class Sueldo{

    HorasTrabajadas;
    PeriodoPago;
    SueldoxHora;
    TiempoExtra;
    Bonos;
    pagoporhora;
    porcentaje;

    constructor(HorasTra, pagporho,sueldoxhora,porcentaje){
        this.HorasTrabajadas = HorasTra;
        this.pagoporhora = pagporho;
        this.sueldoxhora=sueldoxhora;
        this.porcentaje=porcentaje;

    }

   
    calcularSueldoBase() {
        return this.HorasTrabajadas * this.SueldoxHora;
    }
    calcularSueldoTotal() {
        const sueldoBase = this.calcularSueldoBase();
        const sueldoExtra = this.TiempoExtra * (this.SueldoxHora * 1.5);
        const bonos = this.Bonos;
        return sueldoBase + sueldoExtra + bonos;
    }
    actualizarSueldoxHora(nuevoSueldo) {
        this.SueldoxHora = nuevoSueldo;
    }
/**
 * 
 * @param {int} Porcentaje
 */
    ActualizarSueldoPorPorcentaje(Porcentaje){
        let nuevosueldo= this.sueldoxhora *(porcentaje/100)
        this.sueldoxhora+=nuevosueldo;

    }

    imprimirInformacionPago() {
        return `Sueldo por hora: ${this.SueldoxHora}`
        ,`Horas trabajadas: ${this.HorasTrabajadas}`
        ,`Tiempo extra: ${this.TiempoExtra}`
        ,`Bonos: ${this.Bonos}`
        ,`Sueldo base: ${this.calcularSueldoBase()}`
        ,`Sueldo total: ${this.calcularSueldoTotal()}`;
    }
}
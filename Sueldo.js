class Sueldo{

    HorasTrabajadas;
    PeriodoPago;
    SueldoxHora;
    TiempoExtra;
    Bonos;
    pagoporhora;

    constructor(HorasTra, pagporho,sueldoxhora){
        this.HorasTrabajadas = HorasTra;
        this.pagoporhora = pagporho;
        this.sueldoxhora=sueldoxhora

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
    imprimirInformacionPago() {
        console.log(`Sueldo por hora: ${this.SueldoxHora}`);
        console.log(`Horas trabajadas: ${this.HorasTrabajadas}`);
        console.log(`Tiempo extra: ${this.TiempoExtra}`);
        console.log(`Bonos: ${this.Bonos}`);
        console.log(`Sueldo base: ${this.calcularSueldoBase()}`);
        console.log(`Sueldo total: ${this.calcularSueldoTotal()}`);
    }
}
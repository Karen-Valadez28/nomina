class Banco extends Persona{
    NumCuenta;
    TipoBanco ;
    Beneficiarios;
    cantidad;

    constructor(ComprobanteDomicilio, NuC,TiB,Ben,cantidad, name){

        this.ComprobanteDomicilio=ComprobanteDomicilio;
        this.NumCuenta= NuC;
        this.TipoBanco= TiB;
        this.Beneficiarios= Ben;
        this.cantidad=cantidad;
        super(name);
    }
    NumCuenta() {
        return this.NumCuenta;
    }
    actualizarTipoBanco(tipo) {
       return this.TipoBanco = tipo;
    }
    
    
    agregarBeneficiario(beneficiario) {
        this.Beneficiarios.push(beneficiario);
    }

    eliminarBeneficiario(beneficiario) {
        const index = this.Beneficiarios.indexOf(beneficiario);
        if (index > -1) {
            this.Beneficiarios.splice(index, 1);
        }
    }

    transferir(cuentaDestino, cantidad) {
        if (this.cantidad >= cantidad) {
            this.cantidad -= cantidad;
            cuentaDestino.cantidad += cantidad;
            return true;
        }
        return false;
    }

    consultarSaldo() {
        return this.cantidad;
    }

    obtenerInformacion() {
        return `Nombre: ${this.name}, Tipo de Banco: ${this.TipoBanco}, Número de cuenta: ${this.NumCuenta}, Saldo: ${this.cantidad}`;
    }
    
    
    
    
}

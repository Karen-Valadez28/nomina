class Banco{
    NumCuenta;
    TipoBanco ;
    Beneficiarios;

    constructor(ComprobanteDomicilio, NuC,TiB,Ben){

        this.ComprobanteDomicilio;
        this.NumCuenta= NuC;
        this.TipoBanco= TiB;
        this.Beneficiarios= Ben;
    }
    NumCuenta() {
        return this.NumCuenta;
    }
    actualizarTipoBanco(tipo) {
        this.TipoBanco = tipo;
    }
    
    
}

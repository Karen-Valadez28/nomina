class Banco {
    NumCuenta; 
    TipoBanco; 
    Beneficiarios; 

    /**
     * Constructor de la clase Banco
     * @param {string} NuC - Número de cuenta bancaria
     * @param {string} TiB - Tipo de banco
     * @param {array} Ben - Lista de beneficiarios asociados a la cuenta
     */
    constructor(NuC,TiB,Ben){
        this.NumCuenta= NuC;
        this.TipoBanco= TiB;
        this.Beneficiarios= Ben;      
    }    
}


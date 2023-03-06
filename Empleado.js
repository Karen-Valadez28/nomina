class Empleado{
    nombre;
    telef;
    direccion;
    apellidos;
    correo;
    falta = [];

    constructor(nom,telef,dire,apelli,correo){ 
        this.nombre=nom;
        this.telef=telef;
        this.direccion=dire;
        this.apellidos=apelli;
        this.correo=correo;
    }
    /**
     * 
     * @param {Falta} Falta 
     */
    agregarFalta =  function(Falta){
        let falta = this.falta;
        falta.push(Falta);
    }
    
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
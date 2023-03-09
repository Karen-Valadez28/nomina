class Empleado{
    id;
    nombre;
    telef;
    direccion;
    apellidos;
    empleado;
    correo;
    falta = [];
    banco =[];
    /** */

    /**
     * Constructor de la clase Empleado
     * @param {string} nom 
     * @param {string} telef 
     * @param {string} dire
     * @param {string} apelli 
     * @param {string} correo 
     * @param {string} empleado 
     * @param {int} id 
     */    

    constructor(nom,telef,dire,apelli,correo, empleado,id){ 
        this.nombre=nom;
        this.telef=telef;
        this.direccion=dire;
        this.apellidos=apelli;
        this.correo=correo;
        this.empleado=empleado;
        this.id=id;
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
    /**
     * 
     * @param {Banco} Banco 
     */
agregarBanco = function(Banco){
    let banco = this.banco;
    banco.push(Banco);
  }



    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
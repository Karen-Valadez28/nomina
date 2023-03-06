class Area{
    /**para vacantes */
    Nempleadosact;
    Ndesempleados;
    /**para el area */
    Nombrearea ;
    
    constructor(NA, NE, ND){
        this.Nombrearea = NA;
        this.Nempleadosact = NE;
        this.Ndesempleados = ND;
    }
    
    agregarArea = function(area){
        let areas =  this.Nombrearea;
        areas.push(area);
    }

     vacantes = function(){
        var vacante = this.Nempleadosact - this.Ndesempleados;
        return vacante;
     }


 }; 
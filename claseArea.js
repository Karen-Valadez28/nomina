class Area{
    /**para vacantes */
    Nemplarea;
    Nempleadosact;
    
    /**para el area */
    Nombrearea ;
    
    constructor(NA, NE, NEA){
        this.Nombrearea = NA;
        this.Nempleadosact = NE;
        this.Nemplarea = NEA;
    }
    
    agregarArea = function(area){
        let areas =  this.Nombrearea;
        areas.push(area);
    }

     vacantes = function(){
        var vacante = parseInt(this.Nemplarea) - parseInt(this.Nempleadosact);
        return vacante;
     }


 }; 
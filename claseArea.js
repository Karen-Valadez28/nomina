class Area{

    numeroempleados;
    numerodesempleados;
    nvacantes;
    nombrearea;
    
    constructor(NV, NA){
        this.nvacantes = NV;
        this.nombrearea = NA;
    }
    
    vacantes = function(){
        let vacantes = numeroempleados - numerodesempleados;
    }
    
    cambioArea = function(area){
            this.nombrearea = area;
    }
    
    }
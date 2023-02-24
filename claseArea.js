class Area{
    nempleados;
    ndesempleados;
    nvacantes;
    nomarea;
    
    constructor(NV, NA, NE, ND){
        this.nvacantes = NV;
        this.nomarea = NA;
        this.nempleados = NE;
        this.ndesempleados = ND;
    }
    
    vacantes = function(NE, ND){
        this.vacantes = NE-ND;//operando los dos parametros toman el valor del atributo de nvacantes?
    }
    
    cambioArea = function(area){
            this.nomarea = area;
    }

    
    
    }
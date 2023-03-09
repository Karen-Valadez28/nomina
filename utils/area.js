class Area{
    /**para vacantes */
    Nemplarea;
    Nempleadosact;
    
    /**para el area */
    Nombrearea ;
    /**
     * 
     * @param {string} NA 
     * @param {int} NE 
     * @param {int} NEA 
     */
    constructor(NA, NE, NEA){
        this.Nombrearea = NA;
        this.Nempleadosact = NEA;
        this.Nemplarea = NE;
    }
   // funcion para registar area
    agregarArea = function(area){
        let areas =  this.Nombrearea;
        areas.push(area);
    }
    //funcion para calcular vacantes 
     vacantes = function(){
        var vacante = parseInt(this.Nemplarea) - parseInt(this.Nempleadosact);
        return vacante;
     }


 }; 
 var areas;//falta tool y local storage

function guardarArea() {
    let Nombrearea = document.getElementById('Nombrearea');
    //let are1 = new Area(Nombrearea.value);
    //areas.push(are1);
    alert("Se guardo la area");
    Nombrearea.value = "";

    //insertArea();

    //con html  Tool.setDataToLocalStorage("carreras", carreras);

}


function calcularvacantes(){
    let totemplarea = document.getElementById('empleados').value;
    let empleados = document.getElementById('desempleados').value;

    let vacante = new Area(Nombrearea, totemplarea, empleados);
     console.log(vacante);

    let resulvacantes = document.getElementById("resultado");
    resulvacantes.innerHTML = `El numero de vacantes es ${vacante.vacantes()}`;
}
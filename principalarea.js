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
    let empleados = document.getElementById('empleados').value;
    let desempelados = document.getElementById('desempleados').value; 

    let vacante = new Area(empleados, desempelados);

    let resulvacantes = document.getElementById("resultado");
    resulvacantes.innerHTML = `El numero de vacantes es ${vacante.vacantes()}`;
}
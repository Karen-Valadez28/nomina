function calsueldo(){
    let horas = document.getElementById("horas_trabaja").value;
    let pago = document.getElementById("precio_hora").value;

    let sueldo = new Sueldo(horas, pago);
    let presultado = document.getElementById("resultado");
    presultado.innerHTML = `Tu sueldo es de ${sueldo.sueldo()}`;
}

var empleados = [];

function crearEmpleado(e){
    e.preventDefault();

    let name =  document.getElementById('name');
    let apellidos= document.getElementById('lastname')
    let tel =  document.getElementById('phone');
    let correo=document.getElementById('email');
    let dire =  document.getElementById('address');
    
    
    let e1 = new Empleado (name.value, tel.value, dire.value,apellidos.value, correo.value);
    console.log(e1);

    empleados.push(e1);

    localStorage.setItem("Empleado", JSON.stringify(empleados));
         alert("Se guardo el empleado");
    document.getElementById('name').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    
    

}














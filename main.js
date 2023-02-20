var sueldo;
function calsueldo(){
    let horas = document.getElementById("horas_trabaja").value;
    let pago = document.getElementById("precio_hora").value;

    sueldo = new Sueldo(1,2,3,4,4,5);

    let presultado = document.getElementById("resultado");
    presultado.innerHTML = ` Tu sueldo es de ${sueldo.sueldo()}`
    ;
    


}

function cambiarTelefono(){

}
function calcularDescuento(){
    let r1= new Retardos();
    console.log(r1.calcularDescuento());

}


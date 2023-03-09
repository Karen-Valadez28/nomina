class Empleado {
	constructor(id, nom, appat, apmat, email, depto) {
		this.id = id;
		this.nom = nom;
		this.appat = appat;
		this.apmat = apmat;
		this.email = email;
		this.depto = depto;
	}
}

function clickRegistroEmpleado() {
	// creación de id aleatorio
	let id = "" + Math.floor(Math.random() * 999999);
	// recolección de campos de formulario
	let nom = document.getElementById('registro_name');
	let appat = document.getElementById('registro_appaterno');
	let apmat = document.getElementById('registro_apmaterno');
	let email = document.getElementById('registro_email');
	let depto = document.getElementById('registro_depto');
	
	// validaciones de correcto llenado de formulario (pendiente)



	// encapsulamiento de empleado
	let empleado = new Empleado(id, nom.value, appat.value, apmat.value, email.value, depto.value);
	guardarEmpleado(empleado);

	// limpieza de formulario
	nom.value = '';
	appat.value = '';
	apmat.value = '';
	email.value = '';
	depto.value = '';
}

function guardarEmpleado(emp){
	// console.log("desde guardarEmpleado: "+emp.nom);

	var listaActual = []
	// recuperar lo que está actualmente en localStorage
	listaActual = JSON.parse(localStorage.getItem('Empleados')) || [];
	
	// agrego el nuevo empleado a la lista de objetos
	if (listaActual == null || listaActual.length == 0) {
		listaActual = [emp];
	} else {
		// setear la nueva lista en localstorage
		listaActual.push(emp);
	}

	localStorage.setItem('Empleados', JSON.stringify(listaActual));

	alert('El empleado '+emp.nom+' '+emp.appat+' '+emp.apmat+' se guardó exitosamente.')

}
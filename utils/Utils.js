function clickLogin() {
	let mail = document.getElementById('login_email')
	let pass = document.getElementById('login_password')
	
	// valores prestablecidos del usuario Administrador
	let userAdmin = 'ADMIN'
	let pswAdmin = '4DM1N'
	if (mail.value == userAdmin && pass.value == pswAdmin) {
		// login correcto de admin
		alert('Bienvenido Administrador')
		window.open('../views/empleado.html','_self')
	} else {
		alert('Usuario no reconodico, revisa tu correo y contraseña')
		mail.value = ""
		pass.value = ""
	}
}
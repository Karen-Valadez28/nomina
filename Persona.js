class Persona{
 
    nombre;
    apellido;
    edad;
    #curp;
    #rfc;
    telefono;
    correo;
    #NSS;
    constructor(name,apell,edad,curp,rfc,phone,correo,address){
       this.nombre=name;
       this.apellido=apell;
       this.edad=edad;
       this.curp=curp;
       this.rfc=rfc;
       this.telefono=phone;
       this.correo=correo;
       this.direccion=address;
    }
    cambiarTelefono = function(nuevoTel){
        this.telefono = nuevoTel; 
    }

    actualizarEdad = function(){
         var nuevaedad = 2023 - this.edad;
    }
    cambiarcorreo = function(nuecorreo){
        this.correo = nuecorreo;
    }
    visualizarNSS = function (){
        return  `El NSS del la persona es: ${ this.#NSS } `;
    }
    NombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    
    imprimirInformacionPersonal() {
        console.log(`Nombre completo: ${this.getNombreCompleto()}`);
        console.log(`Edad: ${this.getEdad()}`);
        console.log(`Teléfono: ${this.getTelefono()}`);
        console.log(`Correo electrónico: ${this.getCorreo()}`);
    }
 
}
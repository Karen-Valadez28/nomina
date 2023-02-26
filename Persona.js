class Persona{
 
    nombre;
    apellido;
    f_nacimiento;
    #curp;
    #rfc;
    telefono;
    correo;
    #NSS;
    constructor(name,apell,curp,rfc,phone,correo,address,f_nacimiento){
       this.nombre=name;
       this.apellido=apell;
       this.curp=curp;
       this.rfc=rfc;
       this.telefono=phone;
       this.correo=correo;
       this.direccion=address;
       this.f_nacimiento= f_nacimiento;
    }
    cambiarTelefono = function(nuevoTel){
        return this.telefono = nuevoTel; 
    }

    ObtenerEdad = function(){
         var nuevaedad = 2023 - this.f_nacimiento;
         return nuevaedad;
    }
    cambiarcorreo = function(nuecorreo){
       return  this.correo = nuecorreo;
    }
    visualizarNSS = function (){
        return  `El NSS del la persona es: ${ this.#NSS } `;
    }
    NombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    
    obtenerCURP() {
        return this.#curp;
    }
    obtenerRFC() {
        return this.#rfc;
    }

    obtenerNSS() {
        return this.#NSS;
    }

    imprimirInformacionPersonal() {
        return `Nombre completo: ${this.getNombreCompleto()}`
        ,`Edad: ${this.getEdad()}`
        ,`Teléfono: ${this.getTelefono()}`
        ,`Correo electrónico: ${this.getCorreo()}`;
    }
 
}
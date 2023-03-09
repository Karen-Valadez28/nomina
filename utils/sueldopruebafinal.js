class Sueldo {
    constructor(sueldobase, antiguedad, apoyo) {
      this.sueldobase = sueldobase;
      this.antiguedad = antiguedad;
      this.apoyo = apoyo;
   
    }
  
    calcularSalarioNeto() {
      const totalPercepciones = this.sueldobase + this.antiguedad + this.apoyo ;
      const ISR = totalPercepciones * 0.1;
      const serviciosalud = this.sueldobase * 0.05;
      const totaldeducciones = ISR + serviciosalud;
      const salarioneto = totalPercepciones - totaldeducciones;
      return salarioneto;
    }
  }
  
  function guardarSalario(sueldo) {
    let salarios = JSON.parse(localStorage.getItem("salarios")) || []; // Inicializar como array vacío si no hay datos
    salarios.push(sueldo); // Usar push en el array
    localStorage.setItem("salarios", JSON.stringify(salarios));
  }
  
  function calcularSalarioNeto() {
    const sueldobase = parseInt(document.querySelector('#sueldobase').value);
    const antiguedad = parseInt(document.querySelector('#antiguedad').value);
    const apoyo = parseInt(document.querySelector('#apoyo').value);
  
    const miSueldo = new Sueldo(sueldobase, antiguedad, apoyo);
    const miSalarioNeto = miSueldo.calcularSalarioNeto();
    guardarSalario(miSalarioNeto);
    console.log(miSalarioNeto);
    alert(`El salario neto es: $${miSalarioNeto}`);
  }
  
  
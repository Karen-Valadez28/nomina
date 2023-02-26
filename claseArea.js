class Area{

    numeroempleados;
    numerodesempleados;
    nvacantes;
    nombrearea;
    empleados;
    
    constructor(NV, NA){
        this.nvacantes = NV;
        this.nombrearea = NA;
        this.numeroempleados = 0;
        this.numerodesempleados = 0;
        this.empleados = [];
    }
    
      
        //  agregar un empleado al área
        agregarEmpleado(empleado) {
          this.empleados.push(empleado);
          this.numeroempleados++;
        }
      
        // remover un empleado del área
        removerEmpleado(empleado) {
          const index = this.empleados.indexOf(empleado);
          if (index !== -1) {
            this.empleados.splice(index, 1);
            this.numeroempleados--;
            this.numerodesempleados++;
          }
        }
      
        //  obtener la cantidad de empleados contratados
        obtenerCantidadEmpleados() {
          return this.numeroempleados;
        }
      
        // obtener la cantidad de empleados desempleados
        obtenerCantidadDesempleados() {
          return this.numerodesempleados;
        }
      
        //  obtener la cantidad de empleados necesarios para cubrir todas las vacantes
        obtenerCantidadEmpleadosNecesarios() {
          return this.nvacantes - this.numeroempleados;
        }
        cambioArea = function(area){
            this.nombrearea = area;
        }
    
        totalEmpleados() {
        return this.numeroempleados - this.numerodesempleados;
        }

        agregarVacante() {
        this.nvacantes++;
        }

        eliminarVacante() {
          if (this.nvacantes > 0) {
            this.nvacantes--;
          }
        }

        obtenerInformacion() {
            return `Nombre del área: ${this.nombrearea}, Número de vacantes: ${this.nvacantes}, Número de empleados: ${this.numeroempleados}, Número de desempleados: ${this.numerodesempleados}`;
        }
}
    


    
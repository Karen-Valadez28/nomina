class Retardos {
    #idRetardo;
    #fecha;
    #horaLlegada;
    #duracion;
    #motivo;
    #idEmpleado;
  
    constructor(idRetardo, fecha, horaLlegada, duracion, motivo, idEmpleado) {
      this.#idRetardo = idRetardo;
      this.#fecha = fecha;
      this.#horaLlegada = horaLlegada;
      this.#duracion = duracion;
      this.#motivo = motivo;
      this.#idEmpleado = idEmpleado;
    }
  
    // Métodos para obtener y establecer los valores de los atributos privados
    getIdRetardo() {
      return this.#idRetardo;
    }
  
    setIdRetardo(idRetardo) {
      this.#idRetardo = idRetardo;
    }
  
    getFecha() {
      return this.#fecha;
    }
  
    setFecha(fecha) {
      this.#fecha = fecha;
    }
  
    getHoraLlegada() {
      return this.#horaLlegada;
    }
  
    setHoraLlegada(horaLlegada) {
      this.#horaLlegada = horaLlegada;
    }
  
    getDuracion() {
      return this.#duracion;
    }
  
    setDuracion(duracion) {
      this.#duracion = duracion;
    }
  
    getMotivo() {
      return this.#motivo;
    }
  
    setMotivo(motivo) {
      this.#motivo = motivo;
    }
  
    getIdEmpleado() {
      return this.#idEmpleado;
    }
  
    setIdEmpleado(idEmpleado) {
      this.#idEmpleado = idEmpleado;
    }
  
    // Método para calcular la hora de salida considerando el retardo
    calcularHoraSalida() {
      const horaLlegada = new Date(this.#horaLlegada);
      const horaSalida = new Date(horaLlegada.getTime() + this.#duracion * 60000);
      return horaSalida.toLocaleTimeString();
    }
  
    // Método para obtener la información completa del registro de retardo
    toString() {
      return `ID Retardo: ${this.#idRetardo}\nFecha: ${this.#fecha}\nHora de llegada: ${this.#horaLlegada}\nDuración: ${this.#duracion} minutos\nMotivo: ${this.#motivo}\nID Empleado: ${this.#idEmpleado}`;
    }
  }
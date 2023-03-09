class Tool {
  static findPersona(idPersona) {
    /* metodo para encontrar la persona */
    var objeto = JSON.parse(
      localStorage.getItem("Empleados") //Obtener el localStorage
    ); /* se le quita el formato JSON al localstorage para poder interactuar con el  */
    var coincidencia = objeto?.find(
      (id) => id.id == idPersona
    ); /* ? = se ocupa para la aplicacion no truene cuando la informacion viene null o aun no se carga 
    // find es una funcion que retorna la primer coincidencia de lo que se cumpla*/
    return coincidencia;
  }
  static updatePersona(nomb, data) {
    var arreglo = JSON.parse(localStorage.getItem("Empleados"));
    let objeto = arreglo.find((item) => item.id === nomb);
    if (!objeto) {
      /* Se define que si no se encuenta objeto mantenga el localstorage tal cual */
      return arreglo;
    }
    if (objeto.falta) {
      objeto.falta.push(data);
    } else {
      objeto.falta = [data];
    }
    console.log(arreglo);
    localStorage.setItem("Empleados", JSON.stringify(arreglo)); //Guardar el localstorage manipulado
  }

  static findPersonaB(nomb) {
    var cosa = JSON.parse(localStorage.getItem("Empleados"));
    var coincidenciabanco = cosa?.find((name) => name.id == nomb);
    return coincidenciabanco;
  }
  static updatePersonaB(nomb, save) {
    var matriz = JSON.parse(localStorage.getItem("Empleados"));
    let cosa = matriz.find((item) => item.id === nomb);
    if (!cosa) {
      return matriz;
    }
    if (cosa.banco) {
      cosa.banco.push(save);
    } else {
      cosa.banco = [save];
    }    
    localStorage.setItem("Empleados", JSON.stringify(matriz));
  }

  /**
   *
   * @param {string} cadena
   * @returns {string}
   */
  static strToSlug(cadena) {
    return encodeURIComponent(cadena).replace(/%20/g, "-");
  }

  static setDataToLocalStorage(parameter, data) {
    localStorage.setItem(parameter, JSON.stringify(data));
  }
  /**
   *
   * @param {string} parameter
   * @returns {Array}
   */
  static getDatFromLocalStorage(parameter) {
    return JSON.parse(localStorage.getItem(parameter));
  }
}

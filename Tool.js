class Tool {
    static findPersona(nomb) {/* metodo para encontrar la persona */
      var objeto = JSON.parse(localStorage.getItem("Empleado"));/* se le quita el formato JSON al localstorage para poder interactuar con el  */

    var coincidencia = objeto?.find((name) => name.nombre == nomb);/* ? = se ocupa para la aplicacion no truene cuando la informacion viene null o aun no se carga // find es una funcion que retorna la primer coincidencia de lo que se cumpla*/
    return coincidencia;
  }
  static updatePersona(nomb,data){
    var arreglo= JSON.parse(localStorage.getItem("Empleado"));
    let objeto = arreglo.find((item) => item.nombre === nomb);
    if (!objeto) {/* Se define que si no se encuenta objeto mantenga el localstorage tal cual */
      return arreglo;
    }
    if (objeto.falta) {
      objeto.falta.push(data);
    } else {
      objeto.falta = [data];
    }
    console.log(arreglo);
    localStorage.setItem("Empleado", JSON.stringify(arreglo));
}


    



static findPersonaB(nomb) {
      var cosa = JSON.parse(localStorage.getItem("Empleado"));
    var coincidenciabanco = cosa?.find((name) => name.nombre == nomb);
    return coincidenciabanco;
  }
  static updatePersonaB(nomb,save){
    var matriz= JSON.parse(localStorage.getItem("Empleado"));
    let cosa= matriz.find((item) => item.nombre === nomb);
    if (!cosa) {
      return matriz;
    }
    if (cosa.banco) {
      cosa.banco.push(save);
    } else {
      objetob.banco = [save];
    }
    console.log(matriz);
    localStorage.setItem("Empleado", JSON.stringify(matriz));
}


}

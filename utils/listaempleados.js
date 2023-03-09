function crearTabla() {
  let empleadosLS = JSON.parse(localStorage.getItem("Empleados")) || [];
  console.log(empleadosLS);

  var myTableDiv = document.getElementById("table_empleados");
  var table = document.createElement("TABLE");
  var tableBody = document.createElement("TBODY");

  table.border = "6";
  table.appendChild(tableBody);

  var heading = new Array();
  heading[0] = "Nombre";
  heading[1] = "Apellido paterno";
  heading[2] = "Apellido Materno";
  heading[3] = "Correo";
  heading[4] = "Departamento ";

  //columnas
  var tr = document.createElement("TR");
  tableBody.appendChild(tr);
  for (i = 0; i < heading.length; i++) {
    var th = document.createElement("TH");
    th.width = "100";
    th.appendChild(document.createTextNode(heading[i]));
    tr.appendChild(th);
  }
  //filas
  for (i = 0; i < empleadosLS.length; i++) {
    var tr = document.createElement("TR");
    console.log(empleadosLS[i].nom);
    var td = document.createElement("TD");
    td.appendChild(document.createTextNode(empleadosLS[i].nom));
    tr.appendChild(td);

    var td1 = document.createElement("TD");
    td1.appendChild(document.createTextNode(empleadosLS[i].appat));
    tr.appendChild(td1);
    var td2 = document.createElement("TD");
    td2.appendChild(document.createTextNode(empleadosLS[i].apmat));
    tr.appendChild(td2);
    var td3 = document.createElement("TD");
    td3.appendChild(document.createTextNode(empleadosLS[i].email));
    tr.appendChild(td3);
    var td4 = document.createElement("TD");
    td4.appendChild(document.createTextNode(empleadosLS[i].depto));
    tr.appendChild(td4);

    /*for (j = 0; j < empleadosLS[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(empleadosLS[i][j].nom));
            tr.appendChild(td)
        }*/
    tableBody.appendChild(tr);
  }
  myTableDiv.appendChild(table);

  /*--function addTable() {
            var myTableDiv = document.getElementById("metric_results")
            var table = document.createElement('TABLE')
            var tableBody = document.createElement('TBODY')
            
            table.border = '1'
            table.appendChild(tableBody);
            
            var heading = new Array();
            heading[0] = "Tipo de Solicitud"
            heading[1] = "Grupo A"
            heading[2] = "Grupo B"
            heading[3] = "Grupo C"
            heading[4] = "Total"
            
            var stock = new Array()
            stock[0] = new Array("Carros", "88.625", "85.50", "85.81", "987")
            stock[1] = new Array("Colores", "88.625", "85.50", "85.81", "989")
            stock[2] = new Array("Numeros", "88.625", "85.50", "85.81", "990")
            stock[3] = new Array("Peticiones", "88.625", "85.50", "85.81", "991")
            
            //COLUMNAS DE LA TABLA
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.width = '75';
                th.appendChild(document.createTextNode(heading[i]));
                tr.appendChild(th);
            }
            
            //FILAS DE LA TABLA
            for (i = 0; i < stock.length; i++) {
                var tr = document.createElement('TR');
                for (j = 0; j < empleadosLS[i].length; j++) {
                    var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(stock[i][j]));
                    tr.appendChild(td)
                }
                tableBody.appendChild(tr);
            }  
            myTableDiv.appendChild(table)
            }*/
}

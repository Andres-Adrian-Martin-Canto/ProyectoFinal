function enviar(evt){
    // Obtengo los valores de los inputs
    var numeroControl = document.getElementById('numeroDeControl');
    var password = document.getElementById('contrasenia');
    // Hago una comprovacion para ver que ninguno sea null si es asi mando reporte
    if (numeroControl.value == "" || password.value == "") {
      if (numeroControl.value == "") {
        alert("Rellena la casilla de numero de control");
      }else if(password.value == ""){
        alert("Rellena la casilla de contrasenia");
      }
      evt.preventDefault();
    }
  }
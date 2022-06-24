// Tenemos la fecha al dar click a nuestro button fecha
function fecha() {
  var actualFecha = new Date();
  document.getElementById('fecha').value = actualFecha.toLocaleDateString();
  document.getElementById('fecha').disabled = true;
}


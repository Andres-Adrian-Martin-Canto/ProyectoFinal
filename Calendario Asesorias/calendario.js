var mes = new Date();
mes = mes.getMonth() ;
var nombres_meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
document.getElementById('Mes').innerText = nombres_meses[mes];
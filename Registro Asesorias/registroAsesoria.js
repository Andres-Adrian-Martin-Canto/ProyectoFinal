var actualFecha = new Date();
document.getElementById("fecha").innerText = actualFecha.toLocaleDateString();
function enviar(){
    document.getElementById('dAcademico').disabled = true;
    document.getElementById('nombreResidente').disabled = true;
    document.getElementById('nControl').disabled = true;
    document.getElementById('carrera').disabled = true;
    document.getElementById('periodo').disabled = true;
    document.getElementById('asesoria').disabled = true;
    document.getElementById('tipoAsesoria').disabled = true;
    document.getElementById('temasAsesorar').disabled = true;
    document.getElementById('solicionAsesorar').disabled = true;
    document.getElementById('Enviar').disabled = true;
}
function cancelar(){
    document.getElementById('dAcademico').disabled = false;
    document.getElementById('nombreResidente').disabled = false;
    document.getElementById('nControl').disabled = false;
    document.getElementById('carrera').disabled = false;
    document.getElementById('periodo').disabled = false;
    document.getElementById('asesoria').disabled = false;
    document.getElementById('tipoAsesoria').disabled = false;
    document.getElementById('temasAsesorar').disabled = false;
    document.getElementById('solicionAsesorar').disabled = false;
    document.getElementById('Enviar').disabled = false;
}

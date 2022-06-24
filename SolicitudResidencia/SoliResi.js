// Variables
let Checked1 = null;
let Checked2 = null;
let Checked3 = null;
let Checked4 = null;
let Checked5 = null;
//The class name can vary
for (let CheckBox of document.getElementsByClassName('pcheckbox')){
	CheckBox.onclick = function(){
  	if(Checked1!=null){
      Checked1.checked = false;
      Checked1 = CheckBox;
    }
    Checked1 = CheckBox;
  }
}
//The class name can vary
for (let CheckBox of document.getElementsByClassName('cCheckbox')){
	CheckBox.onclick = function(){
  	if(Checked4!=null){
      Checked4.checked = false;
      Checked4 = CheckBox;
    }
    Checked4 = CheckBox;
  }
}

//The class name can vary
for (let CheckBox of document.getElementsByClassName('scheckbox')){
	CheckBox.onclick = function(){
  	if(Checked2!=null){
      Checked2.checked = false;
      Checked2 = CheckBox;
    }
    Checked2 = CheckBox;
  }
}
//The class name can vary
for (let CheckBox of document.getElementsByClassName('tcheckbox')){
	CheckBox.onclick = function(){
  	if(Checked3!=null){
      Checked3.checked = false;
      Checked3 = CheckBox;
    }
    Checked3 = CheckBox;
  }
}
//The class name can vary
for (let CheckBox of document.getElementsByClassName('qCheckbox')){
	CheckBox.onclick = function(){
  	if(Checked5!=null){
      Checked5.checked = false;
      Checked5 = CheckBox;
    }
    Checked5 = CheckBox;
  }
}
// Tenemos la fecha al dar click a nuestro button fecha
function fecha() {
  var actualFecha = new Date();
  document.getElementById('fecha').value = actualFecha.toLocaleDateString();
  document.getElementById('fecha').disabled = true;
}

// Cerramos todos los textField
function enviar(){
  // Desabilitar los checkbox
  document.getElementById('Enviar').disabled = true;
  document.getElementById('2').disabled = true;
  document.getElementById('3').disabled = true;
  document.getElementById('4').disabled = true;
  document.getElementById('5').disabled = true;
  document.getElementById('6').disabled = true;
  document.getElementById('7').disabled = true;
  document.getElementById('8').disabled = true;
  document.getElementById('9').disabled = true;
  document.getElementById('10').disabled = true;
  document.getElementById('11').disabled = true;
  document.getElementById('12').disabled = true;
  document.getElementById('18').disabled = true;
  document.getElementById('13').disabled = true;
  document.getElementById('14').disabled = true;
  // Desabilitar los textField
  document.getElementById('nombreProyecto').disabled = true;
  document.getElementById('input1').disabled = true;
  document.getElementById('input2').disabled = true;
  document.getElementById('input3').disabled = true;
  document.getElementById('input4').disabled = true;
  document.getElementById('input5').disabled = true;
  document.getElementById('input6').disabled = true;
  document.getElementById('input7').disabled = true;
  document.getElementById('input8').disabled = true;
  document.getElementById('input9').disabled = true;
  document.getElementById('input10').disabled = true;
  document.getElementById('input11').disabled = true;
  document.getElementById('input12').disabled = true;
  document.getElementById('input13').disabled = true;
  document.getElementById('input14').disabled = true;
  document.getElementById('input15').disabled = true;
  document.getElementById('input16').disabled = true;
  document.getElementById('input17').disabled = true;
  document.getElementById('input18').disabled = true;
  document.getElementById('input19').disabled = true;
  document.getElementById('input20').disabled = true;
  document.getElementById('input21').disabled = true;
  document.getElementById('input22').disabled = true;
  document.getElementById('input23').disabled = true;

}

// Hacemos que se vuelvan a editar los textField y checkbox
function editar() {
  // Habilitar los checkbox
  document.getElementById("Enviar").disabled = false;
  document.getElementById('2').disabled = false;
  document.getElementById('3').disabled = false;
  document.getElementById('4').disabled = false;
  document.getElementById('5').disabled = false;
  document.getElementById('6').disabled = false;
  document.getElementById('7').disabled = false;
  document.getElementById('8').disabled = false;
  document.getElementById('9').disabled = false;
  document.getElementById('10').disabled = false;
  document.getElementById('11').disabled = false;
  document.getElementById('12').disabled = false;
  document.getElementById('18').disabled = false;
  document.getElementById('13').disabled = false;
  document.getElementById('14').disabled = false;
    // Habilitar los textField
    document.getElementById('nombreProyecto').disabled = false;
    document.getElementById('input1').disabled = false;
    document.getElementById('input2').disabled = false;
    document.getElementById('input3').disabled = false;
    document.getElementById('input4').disabled = false;
    document.getElementById('input5').disabled = false;
    document.getElementById('input6').disabled = false;
    document.getElementById('input7').disabled = false;
    document.getElementById('input8').disabled = false;
    document.getElementById('input9').disabled = false;
    document.getElementById('input10').disabled = false;
    document.getElementById('input11').disabled = false;
    document.getElementById('input12').disabled = false;
    document.getElementById('input13').disabled = false;
    document.getElementById('input14').disabled = false;
    document.getElementById('input15').disabled = false;
    document.getElementById('input16').disabled = false;
    document.getElementById('input17').disabled = false;
    document.getElementById('input18').disabled = false;
    document.getElementById('input19').disabled = false;
    document.getElementById('input20').disabled = false;
    document.getElementById('input21').disabled = false;
    document.getElementById('input22').disabled = false;
    document.getElementById('input23').disabled = false;
}

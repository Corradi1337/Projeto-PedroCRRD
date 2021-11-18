

/* Aplicar a função de não permitir digitar numeros nas caixas */
var inputName = document.querySelector("#nome");
inputName.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  console.log(keyCode);
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
  /* Mudar o nome do botão para enviado */
function displaySend() {
  document.getElementById("Enviado").innerHTML = "Enviado";
  document.getElementsById("Enviado").style.backgroundColor = "#ccf7ff";
}

/* teste forçar preenchimento das box */
var fill = new Boolean(1);

function preenchido(){

if (fill==1){
  console.log("fill")

}else{
console.log("preencha as caixas")
}
}



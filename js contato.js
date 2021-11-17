


var inputName = document.querySelector("#nome");
inputName.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  console.log(keyCode);
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
  
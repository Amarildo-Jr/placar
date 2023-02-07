function aumentarPlacar(lado){
  const valorPlacar = document.getElementById(`time${lado}`);
  valorPlacar.textContent = (Number)(valorPlacar.textContent) + 1;
} 


const botaoUp = document.getElementsByClassName("botao-up");
botaoUp[0].addEventListener("click", function() {
  this.blur();
});

function diminuirPlacar(lado){
  const valorPlacar = document.getElementById(`time${lado}`);
  if(valorPlacar.textContent != 0) {
    valorPlacar.textContent = (Number)(valorPlacar.textContent) - 1;
  } 
}
function aumentarPlacar(lado){
  const valorPlacar = document.getElementById(`time${lado}`);
  valorPlacar.textContent = (Number)(valorPlacar.textContent) + 1;
} 

function diminuirPlacar(lado){
  const valorPlacar = document.getElementById(`time${lado}`);
  if(valorPlacar.textContent != 0) {
    valorPlacar.textContent = (Number)(valorPlacar.textContent) - 1;
  } 
}
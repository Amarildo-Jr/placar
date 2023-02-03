function alterarPlacar(lado){
    const valorPlacar = document.getElementById(`valor${lado}`)
    valorPlacar.textContent = (Number)(valorPlacar.textContent) + 1
} 
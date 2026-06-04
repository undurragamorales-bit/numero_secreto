
<html lang="pt-br">
<body>
    <div class ="container">
        <input type="number" id="ValorUsuario" min="10" max="50" class="container__input">
    <div class="container">
    <div class="container__conteudo">
        <button onclick="verificarInterno();" class="container__boton">Tentar</button>
        <button onclick="reiniciarJuego();" class="container__boton" id="reiniciar" disabled>Novo jogo</button>
        </div>
    </div>
        
        function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   
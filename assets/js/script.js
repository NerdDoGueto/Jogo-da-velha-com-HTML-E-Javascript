var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var VencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);


    if (quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
    mudarJogador(jogador)
    checaVencedor()
    
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    if (checaSequencia(quadrados[0], quadrados[4], quadrados[8])) {
        mudaCorQuadrado(quadrados[0], quadrados[4], quadrados[8]);
        mudarVencedor(quadrados[0]);
        return;
    }

    if (checaSequencia(quadrados[2], quadrados[4], quadrados[6])) {
        mudaCorQuadrado(quadrados[2], quadrados[4], quadrados[6]);
        mudarVencedor(quadrados[2]);
        return;
    }
    
    for(var i=0; i<quadrados.length; i=i+3){
        var quadrado1 = quadrados[i];
        var quadrado2 = quadrados[i+1];
        var quadrado3 = quadrados[i+2];
        if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
            mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
            mudarVencedor(quadrado1);
            return;
        }
    }
    for(var i=0; i<quadrados.length; i++){
        var quadrado1 = quadrados[i];
        var quadrado2 = quadrados[i+3];
        var quadrado3 = quadrados[i+6];
        if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
            mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
            mudarVencedor(quadrado1);
            return;
        }
    }


}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    VencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    VencedorSelecionado.innerHTML = '';

    for(var i=1; i<=9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}
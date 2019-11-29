// jogador 1 = X
// jogador 2 = O

var vezDoJogador = 1;

function joga(idDiv){
    var textoInterno = document.getElementById(idDiv).innerHTML;
    if (textoInterno == ""){
        if (vezDoJogador == 1){
            document.getElementById(idDiv).innerHTML="<img src='leia.png' class='img-fluid image w-auto p-4' alt='Imagem responsiva';>";
            vezDoJogador = 2;
        }
        else{
            document.getElementById(idDiv).innerHTML="<img src='darth.png' class='img-fluid image w-auto p-4' alt='Imagem responsiva';>";
            vezDoJogador = 1;
        }
    }
    mostraVez();
}

function mostraVez(){
    document.getElementById("rodape").innerHTML = "<h1> Vez do Jogador "+vezDoJogador+"</h1>";
}
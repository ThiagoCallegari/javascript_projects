var numMusica=0;

function tocaAnterior(){
    if (numMusica > 0) {
        numMusica--;
        console.log("musica atual = "+document.getElementById("mymusic").src);
        document.getElementById("mymusic").src = "./Musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
    }
    else {
        numMusica = 3;
        console.log("musica atual = "+document.getElementById("mymusic").src);
        document.getElementById("mymusic").src = "./Musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
    }
}
function tocaAtual(){
    console.log("musica atual = "+document.getElementById("mymusic").src);

        document.getElementById("mymusic").src = "./Musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
}
function paraTudo(){
    document.getElementById("mymusic").pause();

}
function tocaProxima(){
    if (numMusica < 3) {
        numMusica++;
        console.log("musica atual = "+document.getElementById("mymusic").src);
        document.getElementById("mymusic").src = "./Musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
    }
    else {
        numMusica = 0;
        console.log("musica atual = "+document.getElementById("mymusic").src);
        document.getElementById("mymusic").src = "./Musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
    }
}
function separador() {
    var nomeCompleto = document.getElementById("entrada").value;
    
    /*var primeiraPalavra;
    var pos = 0;
    console.log("Li o nome = " + nomeCompleto);
    console.log("Tamanho da palavra = " + nomeCompleto.length);


    pos = nomeCompleto.indexOf(" ");

    while (pos >= 0) {
    primeiraPalavra = nomeCompleto.slice(0, pos);
    nomeCompleto = nomeCompleto.slice(pos + 1);
    console.log("Palavra extraída = " + primeiraPalavra);
    pos = nomeCompleto.indexOf(" ");
    }
    primeiraPalavra = nomeCompleto;
    console.log("Palavra extraída = " + primeiraPalavra);*/

    var palavras = nomeCompleto.split(" ");
    console.log(palavras);
}
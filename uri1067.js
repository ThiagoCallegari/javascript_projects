var num = prompt("Insira um valor entre 1 e 1000: ");
var htmlFile = "";
var nlinha = 0;

for(i=0;i<=num;i++) {
        
    var cssLinha = "linha_" + nlinha;

    if (i%2 != 0) {
    htmlFile += "<div class='row " + cssLinha + "'><div class='col-sm-12'>" + i + "</div></div>"
    } 

    nlinha = (nlinha+1)%3;
}

document.getElementById("cont").innerHTML = htmlFile;
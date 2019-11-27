var n = prompt("Insira um valor inteiro: ");
var texto = "";

for(i=2; i<=n; i+=2) {
    var quad = i * i;
    texto += "<div class='row'><div class='col-md-12 text-center'>" + i + "^2 = " + quad + "</div></div>"
}

document.getElementById("resultado").innerHTML = texto;
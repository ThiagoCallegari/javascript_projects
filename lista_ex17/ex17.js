function calculo() {
    var salBruto = document.getElementById("entrada").value;
    var imposto = 0;

    if (salBruto < 1000) {
        imposto = 0;
    }
    else if (salBruto >= 1000 && salBruto < 2500) {
        imposto = salBruto*0.125;
    }
    else if (salBruto >= 2500 && salBruto < 5000) {
        imposto = salBruto*0.25;
    }
    else {
        imposto = 1300;
    }

    return imposto;
}

function exibir() {
    var salBruto = document.getElementById("entrada").value;
    var imposto = calculo();
    var salLiq = salBruto - imposto;
    var texto = "";

    texto += "Imposto devido R$ " + imposto + "<br/>"+"Salário líquido R$ " + salLiq + "<br/>";
    document.getElementById("resultado").innerHTML = texto;
}


    var nmbr = prompt("Digite o DDD: ");

    /*if (nmbr === "61") {
        document.getElementById("resultado").innerHTML = "Brasília";
    }
    else if (nmbr === "71") {
        document.getElementById("resultado").innerHTML = "Salvador";
    }
    else if (nmbr === "11") {
        document.getElementById("resultado").innerHTML = "São Paulo";
    }
    else if (nmbr === "21") {
        document.getElementById("resultado").innerHTML = "Rio de Janeiro";
    }
    else if (nmbr === "32") {
        document.getElementById("resultado").innerHTML = "Juíz de fora";
    }
    else if (nmbr === "19") {
        document.getElementById("resultado").innerHTML = "Campinas";
    }
    else if (nmbr === "27") {
        document.getElementById("resultado").innerHTML = "Vitoria";
    }
    else if (nmbr === "31") {
        document.getElementById("resultado").innerHTML = "Belo Horizonte";
    } 
    else {
        document.getElementById("resultado").innerHTML = "DDD desconhecido";
    }*/

    switch(nmbr) {
        case "61":
            document.getElementById("resultado").innerHTML = "Brasília";
        break
        case "71":
            document.getElementById("resultado").innerHTML = "Salvador";
        break
        case "11":
            document.getElementById("resultado").innerHTML = "São Paulo";
        break
        case "21":
            document.getElementById("resultado").innerHTML = "Rio de Janeiro";
        break
        case "32":
            document.getElementById("resultado").innerHTML = "Juíz de fora";
        break
        case "19":
            document.getElementById("resultado").innerHTML = "Campinas";
        break
        case "27":
            document.getElementById("resultado").innerHTML = "Vitoria";
        break
        case "31":
            document.getElementById("resultado").innerHTML = "Belo Horizonte";
        break
        default:
                "DDD desconhecido"
    }

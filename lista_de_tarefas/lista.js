function adicionar() {

    //num++;
    var nometarefa = document.getElementById("entrada").value;
    var novalinha='<div class="input-group mb-3" id="lista"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><div type="text" class="form-control" id="newTxt" aria-label="Text input with checkbox">**tituloDaTarefa**<div></div>';

    //novalinha = novalinha.replace("**numSequencia**",num);
    novalinha = novalinha.replace("**tituloDaTarefa**",nometarefa);
    console.log(novalinha);

    document.getElementById("lista").innerHTML+=novalinha;
}
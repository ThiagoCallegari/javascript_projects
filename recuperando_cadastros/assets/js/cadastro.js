function encontar() {
    var idRecuperado = document.getElementById("entrada").value;
    console.log("ID Recuperado" + idRecuperado);

    var URL = "https://jsonplaceholder.typicode.com/users/" + idRecuperado;
    console.log("Essa é a URL: " + URL);

    fetch(URL, { method: "GET" })
        .then(response => response.json())
        .then(json => meuHTML(json));
}

function meuHTML(json) {
    //resultado.innerHTML = JSON.stringify(json);

        var resultado1 = document.getElementById("resultado1");

        resultado1.innerHTML = "<h4>Personal Information</h4><br/><b>ID:</b> " + json.id + "<br/>";
        resultado1.innerHTML += "<b>Name:</b> " + json.name + "<br/>";
        resultado1.innerHTML += "<b>User name:</b> " + json.username + "<br/>";
        resultado1.innerHTML += "<b>Email:</b> " + json.email + "<br/><br/>";
        resultado1.innerHTML += "<h4>Address</h4> <br/>" + "<b>Street:</b> " + json.address.street + "<br/>";
        resultado1.innerHTML += "<b>Suite:</b> " + json.address.suite + "<br/>";
        resultado1.innerHTML += "<b>City:</b> " + json.address.city + "<br/>";
        resultado1.innerHTML += "<b>Zip Code:</b> " + json.address.zipcode + "<br/><br/>";

        var resultado2 = document.getElementById("resultado2");

        resultado2.innerHTML = "<h4>Contact</h4><br/>" + "<b>Phone:</b> " + json.phone + "<br/>";
        resultado2.innerHTML += "<b>Website:</b> " + json.website + "<br/><br/>";
        resultado2.innerHTML += "<h4>Company Data</h4> <br/>" + "<b>Company name:</b> " + json.company.name + "<br/>";
        resultado2.innerHTML += "<b>Catch Phrase:</b> " + json.company.catchPhrase + "<br/>";
        resultado2.innerHTML += "<b>Bs:</b> " + json.company.bs + "<br/><br/>";
}
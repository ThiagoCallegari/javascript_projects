var salMin = prompt("Insira o salário mínimo: ");
var qtdeKw = prompt("Insira a quantidade de Kw: ");

var vlr1kw = salMin/700
var vlrTtl = qtdeKw * vlr1kw
var vlr10 = vlrTtl * 0.9

document.write("Valor de 1 Kw: R$" + vlr1kw + "</br>");
document.write("Valor total da conta: R$" + vlrTtl + "</br>");
document.write("Valor com 10% de desconto: R$" + vlr10) + "</br>";

console.log("Valor de 1 Kw: R$" + vlr1kw);
console.log("Valor total da conta: R$" + vlrTtl);
console.log("Valor com 10% de desconto: R$" + vlr10);

alert("Valor de 1 Kw: R$" + vlr1kw);
alert("Valor total da conta: R$" + vlrTtl);
alert("Valor com 10% de desconto: R$" + vlr10);
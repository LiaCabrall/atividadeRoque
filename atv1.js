const prompt = require("prompt-sync")();

console.log("Digite sua altura:");
let altura = parseFloat(prompt("")); 
console.log("Digite seu peso:");
let peso = parseFloat(prompt("")); 


var resultado = peso / (altura * altura);


if (resultado < 18.5) {
    console.log('Abaixo do peso');
} else if (resultado >= 18.5 && resultado <= 24.9) {
    console.log("");
    console.log('Peso normal');
} else if (resultado >= 25.0 && resultado <= 29.9) {
    console.log("");
    console.log('Excesso de peso');
} else if (resultado >= 30.0 && resultado <= 34.9) {
    console.log("");
    console.log('Obesidade grau I');
} else if (resultado >= 35.0 && resultado <= 39.9) {
    console.log("");
    console.log('Obesidade grau II');
} else if (resultado >= 40) {
    console.log("");
    console.log('Obesidade grau III');
}
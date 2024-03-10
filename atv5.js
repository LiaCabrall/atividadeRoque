const prompt = require("prompt-sync")();

const valorSaque = parseInt(prompt("Digite o valor que deseja sacar: "));

const ehMultiploDe10 = valorSaque % 10 === 0;

if (ehMultiploDe10) {
    console.log("Saque realizado com sucesso.");
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10.");
}
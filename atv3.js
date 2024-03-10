const prompt = require("prompt-sync")();

console.log("Qual sua idade?");
let idade = parseInt(prompt("")); 

if (idade < 18) {
    console.log("Você é menor de idade")
}
else if (idade >= 18) {
    console.log("Você é maior de idade")
}

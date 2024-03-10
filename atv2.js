const prompt = require("prompt-sync")();

var numeroCerto = 12;

for (let i = 0; ; i++) {
    console.log("Pensei em um número entre 1 e 100. Dê seu palpite");
    let numeroPalpite = parseInt(prompt(""));

    if (numeroPalpite === numeroCerto) {
        console.log("Acertou!!! O número certo é " + numeroPalpite);
        break;
    } else if (numeroPalpite > numeroCerto) {
        console.log("Seu número é maior que o número secreto");
        console.log("");
    } else {
        console.log("Seu número é menor que o número secreto");
        console.log("");
    }
}

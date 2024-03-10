const prompt = require("prompt-sync")();

console.log("Digite os comprimentos dos três lados do triângulo:");
const lado1 = parseFloat(prompt("Lado 1: "));
const lado2 = parseFloat(prompt("Lado 2: "));
const lado3 = parseFloat(prompt("Lado 3: "));

const validoTriangulo = (l1, l2, l3) => {
    return l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1;
};

const classificarTriangulo = (l1, l2, l3) => {
    if (l1 === l2 && l2 === l3) {
        return "Equilátero";
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
};

if (validoTriangulo(lado1, lado2, lado3)) {
    const tipoTriangulo = classificarTriangulo(lado1, lado2, lado3);
    console.log(`Os comprimentos dados formam um triângulo ${tipoTriangulo}.`);
} else {
    console.log("Os comprimentos dados não formam um triângulo válido.");
}
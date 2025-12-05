const prompt = require('prompt-sync')();
let nomber = Number(prompt('Enter un number a 3 chiffres : '));
let inverse = nomber.toString().split("").reverse().join("")
console.log(inverse);

const prompt = require('prompt-sync')();
let a = Number(prompt("entrer la valeur de a : ")), b = Number(prompt("entrer la valeur de b : ")) ,c = Number(prompt("entrer la valeur de c : ")), d = Number(prompt("entrer la valeur de d : "));
let somme = a + b + c + d ;
let moyenne = somme / 4 ; 
console.log (`La somme est : ${somme}, et la moyenne est :  ${moyenne}`);
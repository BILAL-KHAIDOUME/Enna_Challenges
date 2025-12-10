const prompt = require('prompt-sync')();
    let n = parseInt(prompt('Entrer un chiffre n : '));
    let inverse = parseInt(n.toString().split("").reverse().join(""));

    console.log(inverse);
    
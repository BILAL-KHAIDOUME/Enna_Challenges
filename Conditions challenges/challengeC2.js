const prompt = require('prompt-sync')();
    let n = Number(prompt('Entrez un nombre : '));
        if (n > 0) {
            console.log('Le nombre est positif ');
        }
        else if (n < 0) {
            console.log('Le nombre est negatif ')
        }
        else {
            console.log('nul')
        }
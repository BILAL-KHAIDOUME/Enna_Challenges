const prompt = require('prompt-sync')();
 let age = parseInt(prompt('Entrez votre age : '));
    if (age >= 18 ) {
        console.log('Eligible au vote');
    }
    else {
        console.log('Non eligible');
    }
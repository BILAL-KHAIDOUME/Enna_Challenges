const prompt = require('prompt-sync')();
    let EUR = Number(prompt('entrez un chiffre en euros : '));
    let MAD = EUR / 10.61 ;
        console.log(`le chiffre en Dirhams est : ${MAD} MAD`);
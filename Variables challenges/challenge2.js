const prompt = require('prompt-sync')();
    let c = Number(prompt('entrer temperature en Celsius : '));
    let f = (c * 1.8) + 32 ;
        console.log(`la conversion de la temperature entree en Celsius est ${f} en Fahrenheit.`);
        
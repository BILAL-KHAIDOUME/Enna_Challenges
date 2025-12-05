const prompt = require('prompt-sync')();
    let n = parseInt(prompt('Entrez un nombre n : '));
        if (n % 2 === 0) {
            console.log('le nombre est pair ');
        }
        else{
            console.log("le nombre est impair");
        }
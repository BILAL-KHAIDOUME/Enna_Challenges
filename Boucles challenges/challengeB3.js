const prompt = require('prompt-sync')();
    let som = 0;
    let max = 0;

    while(true){
        let n = parseInt(prompt("donner une nombre entier : "));
            if (n === 0) break;
            if (n >  100 ) continue;
    som += n ;
    max = n > max ? n : max;

    }
    console.log ("la somme est ", som);
    console.log("la max est " , max);

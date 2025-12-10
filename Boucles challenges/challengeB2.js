const prompt = require('prompt-sync')();
    let n = Number(prompt('Entrer un nombre n : '));
    let count = 0 ;

        for (let i = 2 ; i < n ; i++) {
            if (n % i === 0 ) {
                count++
            }
        }
    if (n <= 1 ) {
        console.log('NON PREMIER !');
        
    }else if (count > 0) {
        console.log('NON PREMIER !');
        
    }else {
        console.log('PREMIER');
        
    }
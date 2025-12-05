const prompt = require('prompt-sync')();
    let A = Number(prompt('Entrez la valeur de A : ')) , 
        B = Number(prompt('Entrez la valeur de B : ')); 
            if (A > B) {
                console.log("Le nombre le plus grang est : "+ A);
            }
            else if (A < B) {
                console.log('Le nombre le plus grand est : '+ B);
            }
            else  {

                console.log('les nombres que vous avez saisis étaient égaux');
            } 

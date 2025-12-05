const prompt = require('prompt-sync')();
    let password = prompt('Entrez le mot de pass : ');
    if (password.length <= 6) {
        console.log("mot de passe est faible ");
    }
     else if (password.length >= 8 && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        console.log('mot de passe est fort');
        
    }
    else if(password.length >= 6 && /\d/.test(password)) {
        console.log('mot de passe est moyen');
        
    }
   
    else {
        console.log('Entrez un valid mot de passe ');
        
    }
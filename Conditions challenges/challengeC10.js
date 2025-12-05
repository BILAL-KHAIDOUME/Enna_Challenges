const prompt = require('prompt-sync')();
    let username = String(prompt('Entrer votre username : '));
    let password = Number(prompt('Entrer le mot de passe : '));

        switch (true) {
            case (username === "admin" && password === 1234) :
                console.log('Bienvenue Admin');
    break;
            case (username === "admin" && password !== 1234) :
                console.log('Mot de passe incorrect');
    break;
            default :
                console.log('Utilisateur introuvable');
                
                
            
                
        }
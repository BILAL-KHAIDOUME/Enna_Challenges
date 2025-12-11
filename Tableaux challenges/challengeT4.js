const prompt = require ('prompt-sync')();
let array = [];

    for (i = 0 ; i < 3 ; i++ ) {
        array.push(String(prompt('Entrer 3 MOTS : ')));
    }
let mot = String(prompt('Entrer le mot vous vouler rechercher : '));
let index = array.indexOf(mot);

    if (index !== -1) {
        console.log(`Le mot "${mot}" est present a la position ${index} .`);
    }
    else {
        console.log(`Le mot "${mot}" est n'ai existe pas dans le tableaux .`);
        
    }
const prompt = require('prompt-sync')();
    let feu = String(prompt('Enter un Feu tricolore entre ceux-là : rouge , jaune , vert : '));
        switch(true) {
            case(feu === "rouge") :
            console.log('Arrêt');
    break;
            case(feu === "jaune") :
            console.log('Préparez-vous');
    break;
            case(feu === "vert") :
            console.log('Allez');
    break;
            
            default :
            console.log('Error');
            
        }

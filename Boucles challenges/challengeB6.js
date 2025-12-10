const prompt = require('prompt-sync')();
    

while (true) {
    let base = Number(prompt('Entrer la base : '));
    let power = Number(prompt('Entrer la puissance : '));
    if (base > 0 && power >= 0) {
        console.log(`${base} ^ ${power} = ${base ** power}`);
        
        break;
    }
    
}
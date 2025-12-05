const prompt = require ("prompt-sync")();
let a = Number (prompt ("entrer la valeur de a : ")) , b = Number( prompt ("entrer la valeur de b : "));
let somme = a + b , soustraction = a - b , multi = a * b , quotient = a / b , reste = a % b ;

console.log (`
    La Somme de a et b est : ${somme}
    la soustraction de a et b est : ${soustraction} 
    la multiplication de a et b est : ${multi} 
    la quotient de la devision de a et b est : ${quotient} 
    la reste de la devision de a et b est : ${reste}`) ; 


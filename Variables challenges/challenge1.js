const prompt = require('prompt-sync')();

let nom = prompt( 'entrer votre nom :') , 
prenom = prompt('entrer votre prenom : ') ,
 age = Number(prompt('entrer votre age : ')), 
 sexe = prompt('entrer votre sexe: '), 
 tele = Number(prompt("enter votre  tele : "));

// console.log(`Bonjour mr/ms ${nom} ${prenom}, tu as agee ${age} ton sexe est ${sexe} ton numero de telephone est ${tele}, merci et bienvenue.`);
console.log('Bonjour MR/MS ' + nom + prenom + ',' + 'tu as agee ' + age + ' ton sexe est ' + sexe + 'ton numero de tele est ' + tele + '.');
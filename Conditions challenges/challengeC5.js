const PromptSync = require('prompt-sync');

const prompt = require('prompt-sync')();
    let note = Number(prompt('Entrez la note : '));

switch(true){
    case(note >= 90 && note <= 100) :
        console.log(" A ");
break;
    case(note >= 80 && note <= 89) :
        console.log(' B ');
break;
    case(note >= 70 && note <= 79) :
        console.log(' C ');
break;
    case(note >= 60 && note <= 69) :
        console.log(' D ') ;
break;
    case(note < 60 && note >= 0) :
        console.log(' F ');
break;
    default  :
    console.log('error');

}






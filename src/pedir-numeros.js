const prompt = require('prompt-sync')();

let numero;

while (true) { 
    numero = prompt("Dame varios numeros: "); 
    
    
    if (numero == '0') { 
        console.log("El programa termina");
        break; 
    }

    if(isNaN(numero)){
        console.log("oyes que crees, no es un numero")
    }

}   
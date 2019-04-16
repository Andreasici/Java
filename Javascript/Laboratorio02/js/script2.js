var scelte = ["carta", "forbice", "sasso"];
var sceltaUmano = prompt("scegli carta, forbice, sasso");
var sceltaPC;

for (let index = 0; index < 1000; index++) {
    var casuale = parseInt(Math.random() * scelte.length);
    sceltaPC =scelte[casuale];
    vincitore(sceltaUmano,sceltaPC);
}

function vincitore(umano, macchina) {
    if(umano==macchina)
        console.log("pareggio");
    else if(umano=="carta"){
        if(macchina=="forbice")
            console.log("vince macchina");
        else
            console.log("vince umano");
    }
    
    else if(umano=="forbice"){
        if(macchina=="sasso")
            console.log("vince macchina");
        else
            console.log("vince umano");
    }
    
    else if(umano=="sasso"){
        if(macchina=="carta")
            console.log("vince macchina");
        else
        console.log("vince umano");
    }
    
}
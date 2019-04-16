saluto ="sssss";
var ora = 15;

// 1)condizioni
if( ora > 12 )
    saluta();
    //saluto = "buonasera";
else
    saluto = "buongiorno";
    saluto=15;
    console.log(typeof saluto);
// 2) ripetere le istruzioni per un numero di volte noto a priori
//for(var i=0; i<10; i++){
//    console.log(saluto + " " +i);
//}

// 3) ripetere le istruzioni per un numero di volte non noto a priori
var contatore = 0;
while(contatore < 10) {
    console.log(saluto + " " +contatore);
    contatore++;
}

function saluta(){
    alert(saluto);
}
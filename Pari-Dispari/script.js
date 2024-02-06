// scelta utente 
// L’utente sceglie pari o dispari.
let userChoice;
// finchè l'utente non inserisce il dato corretto lo richiedo
do {

    userChoice = prompt("Scegli: pari o dispari").toLowerCase();

    // avverto l'utente se non è corretto 
    if (userChoice !== "pari" && userChoice !== "dispari"){
        alert("I dati non sono corretti, riprovare.")
    }

} while (userChoice !== "pari" && userChoice !== "dispari");


// Inserisce un numero da 1 a 5.
let userNumber;
// finchè l'utente non inserisce un numero che sia tra 1 e 5
do{

    userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

    // avverto l'utente se non è corretto
    if(isNaN(userNumber) || userNumber < 1 || userNumber > 5){
        alert("Inserisci un numero corretto.")
    }


}while(isNaN(userNumber) || userNumber < 1 || userNumber > 5);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber() {
    const random = Math.floor(Math.random() * 5) + 1;

    return random;
}
const computerNumber = randomNumber();


// Sommiamo i due numeri
let sum = computerNumber + userNumber


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function everOrOdd() {
    // se è pari 
    if (sum % 2 == 0) {
        return "pari";

    // se è dipari 
    } else {
        return "dispari";
    }

}
const sumResult = everOrOdd();




let result;




// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

if (userChoice == sumResult){
    // se vince 
    result = ("Complimenti, hai vinto!!");
}else {
    // se perde 
    result = ("Mi dispiace, hai perso.");
}

// scrivo in pagina 
document.getElementById("infos").innerHTML = `Hai scelto: ${userChoice}. <br> Hai scelto il numero: ${userNumber}. <br> Il computer sceglie il numero: ${computerNumber}.`;
document.getElementById("result").innerText = result;




// LOG
console.log(
    "random", computerNumber,
    "numero scelto =", userNumber,
    "pari o dispari = ", everOrOdd(),
);
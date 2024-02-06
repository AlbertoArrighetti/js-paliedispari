// scelta utente 
// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
const userChoice = prompt("pari o dipari");
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));


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
const result = everOrOdd();


// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

if (userChoice == result){
    console.log("HAI VINTO");
}else {
    console.log("HAI PERSO");
}







// LOG
console.log(
    "random", computerNumber,
    "numero scelto =", userNumber,
    "pari o dispari = ", everOrOdd(),
);
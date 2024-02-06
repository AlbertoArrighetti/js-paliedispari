// Chiedere all’utente di inserire una parola.
let userWord = prompt("Inserire una parola. Verificheremo se è palindroma.");




// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(userWord){

    // prendeo la prima e l'ultima lettera tramite gli indici
    let start = 0;
    let end = userWord.length - 1;

    // finchè la parola non è specchiata controlla ogni lettera a partire da sinistra e da destra 
    while (start < end){

        // se le lettere non combaciano 
        if (userWord[start] !== userWord[end]) {

            // ritorna falso (booleano)
            return false;
        }
        
        // aumenta sempre il valore di sinistra 
        start++;
        // diminuisci sempre il valore di destra 
        end--;
    }

// se invece ka porola è completa e tutte le lettere combaciano 
return true;
}




// verifico se la parola è palindroma 
if (isPalindrome(userWord)){
    // se lo è
    document.getElementById("result").innerHTML = userWord + " : è palindroma";

    // altrimenti se non lo è
}else {
    document.getElementById("result").innerHTML = userWord + " : non è palindroma";
}


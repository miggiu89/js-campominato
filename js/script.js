// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// svolgimento esercizio:
// creo due array vuoti
var numeriPc = [];
var numeriUtente = [];


// creo due variabili con il numero massimo del range di numeri casuali e l'altra con il numero di possibilità che ha l'utente e cambio l'algoritmo con lo switch invece dell'if
var numeroMax = 100;
var difficoltà = prompt('Inserisci il livello di difficoltà: 0,1,2');
switch (difficoltà){
  case '1':
  numeroMax = 80;
  break;

  case '2':
  numeroMax = 50;
  break;
}
var numeroTentativi = numeroMax - 16;



// aggiungo 16 numeri all'arrey del pc senza ripetizioni in un intervallo tra 1 e 100
while (numeriPc.length < 16){
  var nRandom = numeriRandom(1,numeroMax);
  // controllo che non ci siano doppioni con il metodo .includes (che mi restituisce un valore booleano) e aggiungo valori all'arrey
  if (!numeriPc.includes(nRandom)){
    numeriPc.push(nRandom);
  }
}
console.log(numeriPc);


// inserimento numeri per l'utente con una funzione
var numeroUtente = inserimentoUtente(numeroTentativi,numeroMax);
console.log(numeriUtente);

var tentativi = 'Mi dispiace!hai perso al tentativo numero: ' + parseInt(numeriUtente.length + 1);
if (numeriUtente.length == numeroTentativi){
  tentativi = 'Hai raggiunto il numero massimo di tentativi quindi.....HAI VINTO!';
}

document.getElementById('numero_prove').innerHTML = tentativi;


// *****funzioni:

// genera numeri random
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// per inserimento dei numeri dell'utente e controllo
function inserimentoUtente(n,max) {
  var sentinella = true;
  while (numeriUtente.length < n && sentinella){
    var nUtente = parseInt(prompt('inserisci un numero compreso tra 1 e ' + max));
    if (numeriUtente.includes(nUtente)){
      alert('Hai già inserito questo numero');
    } else if (!numeriPc.includes(nUtente)){
      numeriUtente.push(nUtente);
    } else {
      sentinella = false;
      alert ('BOMBA');
    }
  }
  return nUtente;
}
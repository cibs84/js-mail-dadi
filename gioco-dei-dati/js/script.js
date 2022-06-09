// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// GENERO UN NUMERO RANDOM DA 1 A 6
    // PER IL GIORCATORE
const playerNumber = Math.floor(Math.random() * 9) + 1;
    // PER IL COMPUTER
const pcNumber = Math.floor(Math.random() * 9) + 1;


// CREO LA VARIABILE 'winner' PER SALVARE SE QUALCUNO HA VINTO 
let winner;


// CONFRONTO I NUMERI DEL GIOCATORE E DEL COMPUTER PER DETERMINARE CHI HA VINTO
    // SE 'playerNumber' E' MAGGIORE DI 'pcNumber' ALLORA "winner = 'COMPUTER'"
if (playerNumber > pcNumber) {
    winner = 'Giocatore';
    // SE 'pcNumber' E' MAGGIORE DI 'playerNumber' ALLORA "winner = 'GIOCATORE'"
} else if (playerNumber < pcNumber) {
    winner = 'Computer';
    // ALTRIMENTI IL RISULTATO SARA' DI PARITA' SENZA VINCITORI
} else {
    winner = 'nobody';
}


// CREO I MESSAGGI PER LA STAMPA FINALE
    // CREO LA COSTANTE 'msgNumbers' CHE CONTIENE IL MESSAGGIO CON I NUMERI ESTRATTI PRECEDENTEMENTE
const msgNumbers = `Giocatore: ${playerNumber} - Computer: ${pcNumber} - `;

    // CREO LA COSTANTE 'msgWin' CHE CONTIENE IL MESSAGGIO DEL VINCITORE
const msgWin = `Ha vinto il ${winner}!`;

    // CREO LA COSTANTE 'msgDraw' CHE CONTIENE IL MESSAGGIO DI PARITA'
const msgDraw = `Risultato di parità. Non ha vinto nessuno!`;


// STAMPO IL MESSAGGIO CON I NUMERI ESTRATTI E IL RISULTATO 
    // SELEZIONO L'ELEMENTO HTML PER LA STAMPA
const result = document.getElementById('result');
    // STAMPO I NUMERI ESTRATTI 'msgNumbers' NELL'ELEMENTO 'result'
    result.innerHTML += msgNumbers;

    // SE NON C'E' UN VINCITORE STAMPO IL MESSAGGIO DI PARITA' 'msgDraw' CONCATENANDOLO A 'msgNumbers' NELL'ELEMENTO 'result'
if (winner === 'nobody') {
    result.innerHTML += msgDraw;
    // ALTRIMENTI STAMPO IL MESSAGGIO CON IL VINCITORE 'msgWin' CONCATENANDOLO A 'msgNumbers' NELL'ELEMENTO 'result'
} else {
    result.innerHTML += msgWin;
}

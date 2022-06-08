// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GENERO UN NUMERO RANDOM DA 1 A 6
    // PER IL GIORCATORE
const playerNumber = Math.floor(Math.random() * 9) + 1;
    // PER IL COMPUTER
const pcNumber = Math.floor(Math.random() * 9) + 1;

// CREO LA VARIABILE 'winner' PER SALVARE CHI HA VINTO
let winner = 'nobody';

// CONFRONTO I NUMERI DEL GIOCATORE E DEL COMPUTER PER DETERMINARE CHI HA VINTO
// SE 'playerNumber' E' MAGGIORE DI 'pcNumber' ALLORA "winner = 'COMPUTER'"
if (playerNumber > pcNumber) {
    winner = 'Giocatore';
    // SE 'pcNumber' E' MAGGIORE DI 'playerNumber' ALLORA "winner = 'GIOCATORE'"
} else if (playerNumber < pcNumber) {
    winner = 'Computer';
};

// CREO LA COSTANTE 'msgNumbers' CONTENENTE I NUMERI ESTRATTI PRECEDENTEMENTE
let msgNumbers = `Giocatore: ${playerNumber} - Computer: ${pcNumber} -`

// CREO LA COSTANTE 'msg' CON IL MESSAGGIO DEL VINCITORE
const msg = `${msgNumbers} Ha vinto il ${winner}!`;

// CREO LA COSTANTE 'msgPar' CON IL MESSAGGIO DI PARITA'
const msgPar = `${msgNumbers} Risultato di parità. Non ha vinto nessuno!`;

// STAMPO IL RISULTATO IN HTML
    // SELEZIONO ELEMENTO HTML PER STAMPA
let result = document.getElementById('result');

    // SE C'E' UN VINCITORE STAMPO 'msg'
if (winner !== 'nobody') {
    result.innerHTML = msg;
    // ALTRIMENTI STAMPO IL MESSAGGIO DI PARITA' 'msgPar'
} else {
    result.innerHTML = msgPar;
};

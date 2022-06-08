// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// CREO UNA LISTA DI EMAIL
const eMails = ['costanza@boolean.it', 'alessandro@boolean.it', 'paolo@boolean.it', 'massimo@boolean.it', 'marilena@boolean.it'];

// CHIEDO ALL'UTENTE DI COMUNICARE LA SUA EMAIL
const userEmail = prompt('Inserisci la tua e-mail');

// CONTROLLO CHE L'EMAIL INSERITA SIA PRESENTE NELL'ELENCO
    // CREO VARIABILE 'eMailFound = false' PER SALVARE SE L'EMAIL E' PRESENTE NELL'ELENCO OPPURE NO
let eMailFound = false;

    // SCORRO LA LISTA EMAIL
for (let i = 0; i < eMails.length; i++) {
    const thisEmail = eMails[i];
    
    // Per ogni elemento: 
    // SE L'EMAIL INSERITA DALL'UTENTE SI TROVA NELL'ELENCO ALLORA 'eMailFound = true'
    if (userEmail === thisEmail) {
        eMailFound = true; 
    }
};

// STAMPO UN MESSAGIO SULL'ESITO DEL CONTROLLO
    // CREO LA VARIABILE 'msg' PER IL MESSAGGIO DA STAMPARE
let msg;
    // SE 'eMailFound === true' ALLORA DICO CHE L'EMAIL SI TROVA NELL'ELENCO
if (eMailFound === true) {
    msg = `L'email inserita è presente nell'elenco`;
    // ALTRIMENTI DICO CHE L'EMAIL NON SI TROVA NELL'ELENCO
} else {
    msg = `L'email inserita NON è presente nell'elenco`;
};

    // STAMPA MESSAGGIO IN HTML
document.querySelector('h1').innerHTML = msg;

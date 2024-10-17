// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// HO UNA LISTA DI MAIL CHE STAMPANO UN MESSAGGIO DI APPROVAZIONE, PER TUTTE LE ALTRE RIFIUTANO L'ACCESSO 
const approvedMails = ['luca@gmail.com' , 'luigi@gmail.com' , 'vincenzo@gmail.com' , 'donato@gmail.com']
console.log (approvedMails)

// CREO UN'ALTRA VARIABILE CON PROMPT PER FAR INSERIRE ALL'UTENTE LA MAIL 

let userEmail = prompt('Inserisci la tua mail per accedere')
console.log (userEmail)

// CONTROLLO PRIMA SE L'INPUT FORNITO DAL NOSTRO UTENTE E' UNA MAIL GMAIL

if (userEmail.match('gmail')) {

    // VADO A VERIFICARE CHE LA MAIL DEL NOSTRO UTENTE SIA PRESENTE NELL'ELENCO PRINCIPALE DELLE MAIL AMMESSE 
    // SO CHE NON RIESCO AD INSERIRE TUTTE LE POSSIBILI VARIANTI PER INSERIRE QUALCOSA CHE NON E' UNA MAIL 

    if (approvedMails.includes(userEmail)) {
        console.log(`Ciao ${userEmail}, puoi effettuare l'accesso. Sei il benvenuto!`)
     } else {
         console.log (`Ci dispiace, ma ${userEmail} non risulta nei nostri sitemi. Riprova.`)
     }   
} else {
    console.log('Ci dispiace, sembra che tu abbia inserito una mail non valida. Riprova!')
}

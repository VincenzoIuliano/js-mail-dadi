const approvedMails = ['luca@gmail.com' , 'luigi@gmail.com' , 'vincenzo@gmail.com' , 'donato@gmail.com']
console.log (approvedMails)

let userEmail = prompt('Inserisci la tua mail per accedere')
console.log (userEmail)

let presente =false

for (let i = 0; i < approvedMails.length; i++) {
    if (userEmail === approvedMails[i]) { 
        presente = true
    } 
} 

if (presente === true) {
    console.log ('Complimenti la tua mail è presente nei nostri database! Puoi accedere')
} else {
    console.log ('Ci dispiace, la tua mail non è presente nei nostri database')
}
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// STAMPO I DUE NUMERI RANDOM DA 1 A 6 SU CUI FARE IL CONFRONTO

let playerNumber = Math.floor(Math.random() * 6) + 1
let computerNumber = Math.floor(Math.random() * 6) + 1
console.log (playerNumber , computerNumber)

// CONTROLLO QUALE GIOCATORE HA VINTO

if (playerNumber > computerNumber) {
    console.log ('Complimenti, ha vinto il giocatore umano!')
} else 
    console.log ('Peccato, ha vinto il giocatore computer!')


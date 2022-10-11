// Ho un prodotto che costa 8 euro, chiedo alll'utente quanti ne vuole comprare, gli sommo il 22% di iva e gli faccio il 50% di sconto. Nell'output inserisco prezzo prodotto, quanti ne ho acquistati, prezzo intero, prezzo scontato. 

const prezzoProdotto = 8;
const iva = 0.22;
const sconto = 0.5; 
const prodottiRichiesti = parseInt(prompt('Quanti ne vuoi acquistare?'));

let prezzoIntero= prodottiRichiesti * prezzoProdotto;
let ivaCalcolata = prezzoIntero * iva;
let prezzoConIva = ivaCalcolata + prezzoIntero;
let prezzoScontato = prezzoConIva - prezzoConIva * sconto;

document.getElementById("risultato").innerHTML=`
Il prodotto selezionato costa ${prezzoProdotto}€ <br>
Tu ne hai acquistati ${prodottiRichiesti}: <br>
il tuo prezzo intero (compreso di iva) è ${prezzoConIva}€ <br>
ma noi qui siamo buoni quindi ti regaliamo il ${sconto * 100}% di sconto, di conseguenza il tuo prezzo finale è: <br>
<strong>${prezzoScontato}€</strong>.
 `
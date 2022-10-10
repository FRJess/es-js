const nomeUtente = "Marco";
const cognomeUtente = " Rossi";
let output;
//document.getElementById('saluto').innerHTML += '<strong>' + nomeUtente + '</strong>' + cognomeUtente;


const annoUtente = parseInt(prompt('In che anno sei nato?'));
const anniUtente = parseInt(prompt('Quanti anni hai?'));
const annoAttuale = annoUtente + anniUtente ;
output = `
  <strong class="red"> ${nomeUtente} </strong> ${cognomeUtente} <br> 
  siamo nel ${annoAttuale}.
`;
console.log(annoAttuale);


document.getElementById('saluto').innerHTML += output;
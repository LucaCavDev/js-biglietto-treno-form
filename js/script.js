// scopo è raccogliere nel primo div le info di nome et&agrave; e distanza.
// costo al km è 0.21 euro
// sconto per minorenni 20% e per over 65 di 40%


// bisogna far uscire sul biglietto il prezzo effettivo da pagare, il nome, l'offerta e con numeri casuali carrozza e codice cp

// VAR NECESSARIE

var nome;
console.log("nome:", nome);
var km;
console.log("km:", km);
var age;
console.log("age:", age);
var prezzo;
console.log("prezzo:", prezzo);
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");

// GENERA

genera.addEventListener("click",
  function () {

    // dati inseriti in id="info"
    nome = document.getElementById("infoName").value;
    km = document.getElementById("infoKm").value;
    age = document.getElementById("infoEta").value;

    // prezzo in base a fascia d'età e relativo sconto
    if (age === "u18") {
      prezzo = (km * 0.21) * 0.80;
      offerta = 'Biglietto Under 18';
    } else if (age === "o65") {
      prezzo = (km * 0.21) * 0.40;
      offerta = 'Biglietto Over 65';
    } else {
      prezzo = km * 0.21;
      offerta = 'Biglietto Standard';
    }

    //limito i decimali a 2 dopo la virgola
    var prezzo = prezzo.toFixed(2);

    //le variabili che generano numeri casuali per carrozza e cp
    var carrozza = Math.floor(Math.random() * 9) + 1;
    var codicecp = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;


    // output biglietto
    document.getElementById("nomebiglietto").innerHTML = nome;
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("carrozza").innerHTML = carrozza;
    document.getElementById("codicecp").innerHTML = codicecp;
    document.getElementById("prezzobiglietto").innerHTML = prezzo + " &euro;";
    document.getElementById("biglietto").style.display = "block";
} );

// ANNULLA

annulla.addEventListener("click",
  function () {
    document.getElementById("info").reset();
    document.getElementById("biglietto").style.display = "none";
    console.clear();
} );

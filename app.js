// DATI
const getNamesFunct = require("./names.js");
const getHobbiesFunct = require("./hobbies.js");

const namesFunct = getNamesFunct.nameInfo("Federica", "Scognamiglio");
const hobbiesFunct = getHobbiesFunct.hobbiesList("leggere", "ballare", "videogames");

// FUNZIONE
function info() {
    return {fullName: `${namesFunct.nome} ${namesFunct.cognome}`, hobbies: hobbiesFunct.hobbies}
}

console.log(info());



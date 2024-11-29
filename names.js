/**
 * Funzione che genera oggetto con proprietà inserite come argomenti
 * @param {string} firstName //nome
 * @param {string} lastName //cognome
 * @returns {object}
 */
function nameInfo(firstName, lastName) {
    return {nome: firstName, cognome: lastName};
}

module.exports = {nameInfo}
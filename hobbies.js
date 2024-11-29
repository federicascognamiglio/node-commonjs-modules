/**
 * Funzione che genera ogetto con lista di hobbie inseriti come argomento
 *
 * @param {string} hobbyOne
 * @param {string} hobbyTwo
 * @param {string} hobbyThree
 * @returns {object}
 */
function hobbiesList(hobbyOne, hobbyTwo, hobbyThree) {
    return {hobbies: [hobbyOne, hobbyTwo, hobbyThree]};
}

module.exports = {hobbiesList}
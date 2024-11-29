// const nameInfo = (firstName, lastName) => {
//     const names = {firstName, lastName};
// };

function nameInfo(firstName, lastName) {
    return {nome: firstName, cognome: lastName};
}

module.exports = {nameInfo}
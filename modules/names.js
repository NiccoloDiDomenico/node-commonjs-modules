/**
 * Description
 * @param {string} firstName 
 * @param {string} lastName
 * @returns {object} 
 */
function fullName(firstName, lastName) {
    return {
        firstName,
        lastName
    };
};
// console.log(fullName(`Pippo`, `Pluto`));

// Export CJS
module.exports = fullName

// Export ES6
// const functions = {
//     fullName
// }
// export default functions;



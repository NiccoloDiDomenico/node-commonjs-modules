/**
 * Description
 * @param {string} firstName 
 * @param {string} lastName
 * @returns {object} 
 */
function getFullName(firstName, lastName) {
    return {
        firstName,
        lastName
    };
};
// console.log(fullName(`Pippo`, `Pluto`));

// Export CJS
module.exports = getFullName

// Export ES6
// export default getFullName;



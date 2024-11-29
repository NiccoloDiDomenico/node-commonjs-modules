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

// Export
module.exports = fullName




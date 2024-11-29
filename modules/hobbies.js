/**
 * Description
 * @param {string} hobbyOne 
 * @param {string} hobbyTwo
 * @param {string} hobbyThree
 * @returns {object} 
 */
function fullHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobbies: [hobbyOne, hobbyTwo, hobbyThree]
    };
};
// console.log(fullHobbies(`Informatica`, `Cucina`, `Sport`));

// Export
module.exports = fullHobbies

/**
 * Description
 * @param {string} hobbyOne 
 * @param {string} hobbyTwo
 * @param {string} hobbyThree
 * @returns {object} 
 */
function getFullHobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return {
        hobbies: [hobbyOne, hobbyTwo, hobbyThree]
    };
};
// console.log(fullHobbies(`Informatica`, `Cucina`, `Sport`));

// Export CJS
module.exports = getFullHobbies

// Export ES6
// export default getFullHobbies;


// Debug
// console.log(process.argv)

// Import modules
const name = require(`./modules/names.js`);
const hobby = require(`./modules/hobbies.js`);


// Funciton
function namesAndHobbies() {
    return {
        name.fullName(`Pippo`, `Pluto`)
        hobby.fullHobbies(`Informatica`, `Cucina`, `Sport`)
    }
}

console.log(namesAndHobbies());


// Import modules
const fullName = require(`./modules/names.js`);
const fullHobbies = require(`./modules/hobbies.js`);


// Functions
function nameAndHobbies() {
    return {
        Name: fullName(`Pippo`, `Pluto`),
        Hobbies: fullHobbies(`Informatica`, `Cucina`, `Sport`)
    }
}

console.log(nameAndHobbies());


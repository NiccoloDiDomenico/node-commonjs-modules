// Import modules CJS
const fullName = require(`./modules/names.js`);
const fullHobbies = require(`./modules/hobbies.js`);

// Import modules ES6
// import functions from "./modules/names.js";
// import functions from "./modules/ho.js";


// Functions
function nameAndHobbies() {
    return {
        Name: fullName(`Pippo`, `Pluto`),
        Hobbies: fullHobbies(`Informatica`, `Cucina`, `Sport`)
    }
}

console.log(nameAndHobbies());


// Import modules CJS
const getFullName = require(`./modules/names.js`);
const getFullHobbies = require(`./modules/hobbies.js`);

// Import modules ES6
// import getFullName from "./modules/names.js";
// import getFullHobbies from "./modules/ho.js";


// Functions
function nameAndHobbies() {
    return {
        // Uso spread operator per prendere gli oggetti nella funzione
        fullName: getFullName(`Pippo`, `Pluto`),
        ...getFullHobbies(`Informatica`, `Cucina`, `Sport`)
    }
}

console.log(nameAndHobbies());


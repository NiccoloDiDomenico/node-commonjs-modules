Ciao Ragazzi,
esercizio di oggi: commonjs-modules
nome repo: node-commonjs-modules

Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:

1. names.js
- Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
- Esporta la funzione dal file.

2. hobbies.js
- Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
- Esporta la funzione dal file.

3. app.js
- Importa la tua funzione da names.js
- Importa la tua funzione da hobbies.js
- Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName e hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

BONUS:
- trasformare la sintassi di commonJS in ES6
- usare la libreria chalk per colorare output
PS: ricordate di aggiungere .gitignore per non pushare la cartella node_modules.
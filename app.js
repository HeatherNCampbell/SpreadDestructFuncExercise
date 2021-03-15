// 1a. 
console.log(`=====0`);

const jPDinos = [
    `Velociraptors`, 
    `Tyrannosaurus Rex`, 
    `Dilophosaurus`
];
console.log(jPDinos);


console.log(`======1`);

// 1b. 

console.log(`======2`);

function seeDinos(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
   }

function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
   }

seeDinos(...jPDinos);


console.log(`=======3`);

// 2a. 

const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`

};

 console.log(jPCharacters);
 
 
console.log(`======4`);

// 2b. 
function seeCharacters ({alanGrant, ellieSattler, ianMalcolm}){
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);





// BONUS
// 3a. Create a const variable named jurassicParkMovies and set the value to an array of two objects. 

//Use the following keys and values for each object in the array: Key value pairs for the 1st object are (one: "Jurassic Park", two: "The Lost World: Jurassic Park", and three: "Jurassic Park III"). 

//Key value pairs for the 2nd object are (four: "Jurassic World" and five: "Jurassic World: Fallen Kingdom"). (NOTE: I would suggest using some copy and paste on this one.)
const jurassicParkMovies = [

]

// 3b. Create a function called seeJPMovies. Having only the following inside the opening and closing curly brackets of the seeJPMovies function (See below), have all five movie names display in the terminal/console when the function is run (HINT: There are at least two ways this can be done)...
//  console.log(one);
//  console.log(two);
//  console.log(three);
//  console.log(four);
//  console.log(five);


// function seeDinos(dinos){
// console.log(dinos[0]);
// console.log(dinos[1]);
// console.log(dinos[2]);
// }
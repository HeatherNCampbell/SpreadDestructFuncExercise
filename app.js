// 1a. 
const jPDinos = [
    `Velociraptors`, 
    `Tyrannosaurus Rex`, 
    `Dilophosaurus`
];
console.log(jPDinos);

// 1b. 
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

// 2a. 
const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`
};

 console.log(jPCharacters);
 
// 2b. 
function seeCharacters ({alanGrant, ellieSattler, ianMalcolm}){
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

// BONUS
const jurassicParkMovies = [
        {
        one: `Jurassic Park`, 
        two: `The Lost World: Jurassic Park`, 
        three: `Jurassic Park III`
    },
        {
            four: `Jurassic World`,
        five: `Jurassic World: Fallen Kingdom`  
    }
]

// 3b. 
function seeJPMovies ({one, two, three}, {four, five}) {
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
}

seeJPMovies(...jurassicParkMovies);
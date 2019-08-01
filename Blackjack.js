console.log('Aces are one because who really chooses eleven?')

//Deck Selector

let deck = [ 
    "Spades",
    "Hearts",
    "Clubs",
    "Diamonds"
];

//Card Selector
let points = [  
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
 
];

//for Loop

for(result = 0; result <= 21;){

    let discard = [];

//Randomizer
    
    let suit = deck[Math.floor(Math.random()*deck.length)];
    let card = points[Math.floor(Math.random() * points.length)]; 
  
//Reroll Duplicates

if(discard.card,discard.points){
    discard.pop(discard.card,discard.points);
    }else{
        discard.push(discard.card,discard.points);
    }

result = result + card;

console.log(`${card} of ${suit}`);
        console.log(`Currently at ${result}`);

if (result === 21){
    console.log("Winner");
        break;
}    else if(result >= 22){
    console.log("Loser");
        }
    }

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value; 
    }
}

class Player {
    constructor() {
        this.cards = [];
        this.score = 0;
        this.turn = false;
    }
}

var deck = [
    new Card('Clubs', 'A', 1),
    new Card('Clubs', '2', 2),
    new Card('Clubs', '3', 3),
    new Card('Clubs', '4', 4),
    new Card('Clubs', '5', 5),
    new Card('Clubs', '6', 6),
    new Card('Clubs', '7', 7),
    new Card('Clubs', '8', 8),
    new Card('Clubs', '9', 9),
    new Card('Clubs', '10', 10),
    new Card('Clubs', 'J', 11),
    new Card('Clubs', 'Q', 12),
    new Card('Clubs', 'K', 13),
    new Card('Diamonds', 'A', 1),
    new Card('Diamonds', '2', 2),
    new Card('Diamonds', '3', 3),
    new Card('Diamonds', '4', 4),
    new Card('Diamonds', '5', 5),
    new Card('Diamonds', '6', 6),
    new Card('Diamonds', '7', 7),
    new Card('Diamonds', '8', 8),
    new Card('Diamonds', '9', 9),
    new Card('Diamonds', '10', 10),
    new Card('Diamonds', 'J', 11),
    new Card('Diamonds', 'Q', 12),
    new Card('Diamonds', 'K', 13),
    new Card('Hearts', 'A', 1),
    new Card('Hearts', '2', 2),
    new Card('Hearts', '3', 3),
    new Card('Hearts', '4', 4),
    new Card('Hearts', '5', 5),
    new Card('Hearts', '6', 6),
    new Card('Hearts', '7', 7),
    new Card('Hearts', '8', 8),
    new Card('Hearts', '9', 9),
    new Card('Hearts', '10', 10),
    new Card('Hearts', 'J', 11),
    new Card('Hearts', 'Q', 12),
    new Card('Hearts', 'K', 13),
    new Card('Spades', 'A', 1),
    new Card('Spades', '2', 2),
    new Card('Spades', '3', 3),
    new Card('Spades', '4', 4),
    new Card('Spades', '5', 5),
    new Card('Spades', '6', 6),
    new Card('Spades', '7', 7),
    new Card('Spades', '8', 8),
    new Card('Spades', '9', 9),
    new Card('Spades', '10', 10),
    new Card('Spades', 'J', 11),
    new Card('Spades', 'Q', 12),
    new Card('Spades', 'K', 13)
];

let player1 = new Player();
let player2 = new Player();

// deal cards
while (deck.length > 0) {
    // generate random number to pick card from array
    const cardsLeft = deck.length;
    let cardIndex;
    
    if (deck.length === 1) {
        cardIndex = 0;
    } else {
        cardIndex = Math.floor(
            Math.random() * (cardsLeft - 1) + 1
        );
    }
    
    var selectedCard = deck.splice(cardIndex, 1)[0];

    // decide which player will get the cards
        // check if player1 has more cards, give to player2
    if (player1.cards.length > player2.cards.length) {
        player2.cards.push(selectedCard);
    } else {
        player1.cards.push(selectedCard);
    }
};

while (player1.cards.length > 0 || player2.cards.length > 0) {
    // draw card for each
    let player1Card = player1.cards.splice(0, 1)[0];
    let player2Card = player2.cards.splice(0, 1)[0];

    // compare
    if (player1Card.value == player2Card.value) {
        continue;
    }

    if (player1Card.value > player2Card.value) {
        player1.score++;
    } else {
        player2.score++;
    }
}

console.log('Score:');
console.log('Player 1: ' + player1.score);
console.log('Player 2: ' + player2.score);

// show score
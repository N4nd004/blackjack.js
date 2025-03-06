
class Deck {
    constructor() {
        this.cards = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal() {
        return this.cards.pop();
    }
}

function printHand(player) {
    return player.hand.map(card => `${card.value} de ${card.suit}`).join(', ');
}

function startGame() {
    player.clearHand();
    dealer.clearHand();

    player.hand.push(deck.deal());
    player.hand.push(deck.deal());
    dealer.hand.push(deck.deal());
    dealer.hand.push(deck.deal());

    console.log("Mão do jogador:", printHand(player));
    console.log("Mão do dealer:", `${dealer.hand[0].value} de ${dealer.hand[0].suit}`, "e Carta Oculta");
}

const deck = new Deck();
deck.shuffle();
class Player {
    constructor(name, chips) {
        this.name = name;
        this.chips = chips;
        this.hand = [];
    }

    getHandValue() {
        let value = 0;
        let aces = 0;
        for (let card of this.hand) {
            value += card.getValue();
            if (card.value === 'A') {
                aces++;
            }
        }
        while (value > 21 && aces > 0) {
            value -= 10;
            aces--;
        }
        return value;
    }

    clearHand() {
        this.hand = [];
    }
}

function playerTurn() {
    let action = prompt("Queres outra carta (h) ou páras (p)?");
    while (action === 'h') {
        player.hand.push(deck.deal());
        console.log("Nova mão do jogador:", printHand(player));
        if (player.getHandValue() > 21) {
            console.log("Busto! Excedeste os 21 pontos.");
            return 'bust';
        }
        action = prompt("Queres outra carta (h) ou páras (p)?");
    }
    
    return 'stand';
}

function placeBet() {
    let bet = parseInt(prompt(`Você tem ${player.chips} \n ¿Quanto queres apostar? `));
    if (bet > player.chips) {
        console.log("Você não tem fichas suficientes para essa aposta.");
        return placeBet();
    }
    return bet;
}

const player = new Player('Jogador', 100);
const dealer = new Player('Banca', Infinity);

function determineWinner() {
    const playerValue = player.getHandValue();
    const dealerValue = dealer.getHandValue();

    if (playerValue > 21) {
        console.log("Perdeste. Busto!");
        return 'lose';
    } else if (dealerValue > 21) {
        console.log("Ganhaste! O dealer excedeu os 21 pontos.");
        return 'win';
    } else if (playerValue > dealerValue) {
        console.log("Ganhaste!");
        return 'win';
    } else if (playerValue < dealerValue) {
        console.log("Perdeste.");
        return 'lose';
    } else {
        console.log("É um empate.");
        return 'draw';
    }
}

function adjustChips(result, bet) {
    if (result === 'win') {
        player.chips += bet;
    } else if (result === 'lose') {
        player.chips -= bet;
    }
    console.log("Fichas restantes:", player.chips);
}

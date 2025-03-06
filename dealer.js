function dealerTurn() {
    console.log("Mão do dealer:", printHand(dealer));
    while (dealer.getHandValue() < 17) {
        dealer.hand.push(deck.deal());
        console.log("Nova mão do dealer:", printHand(dealer));
    }
    console.log("Mão final do dealer:", printHand(dealer));
}

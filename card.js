class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    getValue() {
        if (['J', 'Q', 'K'].includes(this.value)) {
            return 10;
        } else if (this.value === 'A') {
            return 11; // Ajustável mais tarde se necessário   
        } else {
            return parseInt(this.value);
        }
    }
}

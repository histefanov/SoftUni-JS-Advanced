function createDeck(cards) {
    const deck = [];

    for (const card of cards) {
        const face = card.slice(0, card.length - 1);
        const suit = card.slice(card.length - 1);

        try {
            deck.push(createCard(face, suit));
        } catch (error) {
            console.log(`Invalid card: ${card}`)
        }
    }

    console.log(deck.join(' '));

    function createCard(face, suit) {
        const validFaces = new Set(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (!Object.keys(validSuits).includes(suit)) {
            throw new Error(`Invalid suit: ${suit}`);
        }

        if (!validFaces.has(face)) {
            throw new Error(`Invalid face: ${face}`);
        }

        return {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit
            }
        }
    }
}

createDeck(['2C', 'AS', '10D', 'KH', '2C']);
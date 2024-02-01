// Deck.js
import Card from "./card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

class Deck {

    #cards = [];

    constructor(options) {
        this.values = options.values;
        this.suits = options.suits;
    }

    createFullDeck() {
        this.values.forEach((v) => {
            this.suits.forEach((s) => {
                this.#cards.push(new Card(v, s));
            });
        });
        return this;
    }

    shuffle() {
        this.#cards = shuffle(this.#cards);
        return this;
    }

    displayCards() {
        this.#cards.forEach((c) => {
            c.display();
        });
        return this;
    }
}

export default Deck;
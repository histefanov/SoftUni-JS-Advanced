class Hex {
    #value;

    constructor(value) {
        this.#value = value;
    }

    valueOf() {
        return this.#value;
    }

    plus(obj) {
        return new Hex(this.valueOf() + obj.valueOf());
    }

    minus(obj) {
        return new Hex(this.valueOf() - obj.valueOf());
    }

    parse(string) {
        return parseInt(string, 16);
    }

    toString() {
        return `0x${this.#value.toString(16).toUpperCase()}`;
    }
}
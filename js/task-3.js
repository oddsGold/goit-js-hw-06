class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }
    padStart(str) {
        return this.#value = str.concat(this.#value);
    }
    padEnd(str){
        return this.#value = this.#value.concat(str);
    }
    padBoth(str) {
        this.#value = this.padStart(str)
        this.#value = this.padEnd(str)
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
class Storage {
    #items;
    constructor(initialArray) {
        this.#items = initialArray;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        return this.#items.push(newItem);
    }

    removeItem(itemToRemove){
        return this.#items = this.#items.filter((value, index) => {
            return value !== itemToRemove ? value : ""
        });
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
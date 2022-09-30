// toDo: make singleton
class PriceChecker {
  items;
  constructor() {
    this.items = new Map();
  }

  scanAll() {
    // Retrieves/updates price data for all items
    for (const item in Materials) {
      let itemPrice = this.#fetchPrice(item);
      this.items.set(item, itemPrice.getString());
    }
  }
  scan(item) {}
  getPrice(item) {}
  #fetchPrice(item) {
    // ToDo: If returned results are valid
    let gold = Math.floor(Math.random() * 10);
    let silver = Math.ceil(Math.random() * 99);
    let copper = Math.floor(Math.random() * 100);
    return new Currency(gold, silver, copper);
  }
}

class PriceChecker {
  items;
  constructor() {
    this.items = new Map();
  }

  scanAll() {
    // Retrieves/updates price data for all items
    for (const item in [...Materials, ...flasks]) {
      let itemPrice = fetchPrice(item);
      if (itemPrice != null) this.items.set(item, itemPrice);
    }
  }
  scan(item) {}
  getPrice(item) {}
  #fetchPrice(item) {}
}

class MarketItem {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  }
}

// Dummy items for testing

const dummyItem = new MarketItem(flasks[0], new Currency(24, 15, 30));
const dummyMat1 = new MarketItem(Materials.lichbloom, new Currency(1, 15, 10));
const dummyMat2 = new MarketItem(Materials.goldclover, new Currency(2, 14, 75));
const dummyMat3 = new MarketItem(
  Materials.frostLotus,
  new Currency(10, 17, 35)
);
const dummyMat4 = new MarketItem(
  Materials.enchantedVial,
  new Currency(0, 35, 0)
);

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

// Insert dummy item in table
const flaskOfDummy = dummyItem;
let flaskName = flaskOfDummy.item.name;
let flaskCraftCost = flaskOfDummy.item.craftCost();
let flaskBuyPrice = flaskOfDummy.price;
let flaskDiff = flaskBuyPrice.difference(flaskCraftCost).getString();

const flaskTable = document.getElementById("flask-table");
flaskTable.innerHTML += `<tr><td>${flaskName}</td><td>${flaskCraftCost.getString()}</td><td>${flaskBuyPrice.getString()}</td><td>${flaskDiff}</td></tr>`;

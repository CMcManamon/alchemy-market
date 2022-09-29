const materialOne = new Material("Green Plant", new Currency(1, 50, 25));
const materialTwo = new Material("Bowl", new Currency(2, 35, 15));

const flaskOfDummy = dummyItem;
let flaskName = flaskOfDummy.item.name;
let flaskCraftCost = flaskOfDummy.item.craftCost();
let flaskBuyPrice = flaskOfDummy.price;
let flaskDiff = flaskBuyPrice.difference(flaskCraftCost).getString();

const flaskTable = document.getElementById("flask-table");
flaskTable.innerHTML += `<tr><td>${flaskName}</td><td>${flaskCraftCost.getString()}</td><td>${flaskBuyPrice.getString()}</td><td>${flaskDiff}</td></tr>`;

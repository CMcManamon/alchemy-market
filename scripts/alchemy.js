const materialOne = new Material("Green Plant", new Currency(1, 50, 25));
const materialTwo = new Material("Bowl", new Currency(2, 35, 15));

const flaskOfDummy = new Craftable(
  "Flask of Dumb",
  [
    [materialOne, 4],
    [materialTwo, 1],
  ],
  new Currency(10, 0, 0)
);

const flaskTable = document.getElementById("flask-table");
flaskTable.innerHTML += `<tr><td>${flaskOfDummy.name}</td><td>${flaskOfDummy
  .craftCost()
  .getString()}</td><td>${flaskOfDummy.marketPrice.getString()}</td></tr>`;

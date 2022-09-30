class Craftable {
  constructor(name, materials) {
    this.name = name;
    this.materials = materials;
    // ToDo: image
    // ToDo: wowhead id
  }

  // This method will ask the market tool for a price
  marketPrice() {
    return PriceChecker.getPrice(this);
  }

  craftCost() {
    // Sum up the costs of all materials
    let totalCost = new Currency(0, 0, 0);

    // mat[0] is the material object and mat[1] is the quantity
    this.materials.forEach((mat) => {
      // This method will ask the market tool for a price
      //totalCost.add(MarketTool.priceCheck(mat[0].name), mat[1]);
    });

    return totalCost;
  }
}

class Flask extends Craftable {}

class Elixir extends Craftable {}

class Potion extends Craftable {}

class Transmutation extends Craftable {}

const flasks = [
  new Flask("Flask of Endless Rage", [
    [Materials.lichbloom, 7],
    [Materials.goldclover, 3],
    [Materials.frostLotus, 1],
    [Materials.enchantedVial, 1],
  ]),
  new Flask("Flask of Pure Mojo", [
    [Materials.icethorn, 7],
    [Materials.pygmyOil, 3],
    [Materials.frostLotus, 1],
    [Materials.enchantedVial, 1],
  ]),
  new Flask("Flask of Stoneblood", [
    [Materials.lichbloom, 7],
    [Materials.crystallizedLife, 3],
    [Materials.frostLotus, 1],
    [Materials.enchantedVial, 1],
  ]),
  new Flask("Flask of the Frost Wyrm", [
    [Materials.icethorn, 7],
    [Materials.lichbloom, 5],
    [Materials.frostLotus, 1],
    [Materials.enchantedVial, 1],
  ]),
];

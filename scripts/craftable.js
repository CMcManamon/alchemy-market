class Craftable {
  constructor(name, materials) {
    this.name = name;
    this.materials = materials;
    // ToDo: image
    // ToDo: wowhead id
  }

  craftCost() {
    // Sum up the costs of all materials
    let totalCost = new Currency(0, 0, 0);

    // This method will ask the market tool for a price
    // mat[0] is the material object and mat[1] is the quantity
    this.materials.forEach((mat) => {
      //totalCost.add(MarketTool.priceCheck(mat[0].name), mat[1]);
    });

    return totalCost;
  }
}

class Flask extends Craftable {}

class Elixir extends Craftable {}

class Potion extends Craftable {}

class Transmutation extends Craftable {}

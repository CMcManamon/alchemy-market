class Craftable {
  constructor(materials, marketPrice) {
    this.materials = materials;
    this.marketPrice = marketPrice;
    // ToDo: image
    // ToDo: wowhead id
  }

  craftCost() {
    // Sum up the costs of all materials
    return "unknown";
  }
}

class Flask extends Craftable {}

class Elixir extends Craftable {}

class Potion extends Craftable {}

class Transmutation extends Craftable {}

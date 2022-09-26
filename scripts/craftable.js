class Craftable {
  constructor(name, materials, marketPrice) {
    this.name = name;
    this.materials = materials;
    this.marketPrice = marketPrice;
    // ToDo: image
    // ToDo: wowhead id
  }

  craftCost() {
    // Sum up the costs of all materials
    let totalCopper = 0;
    let totalSilver = 0;
    let totalGold = 0;

    this.materials.forEach((mat) => {
      totalCopper += mat[0].price.copper * mat[1];
      totalSilver += mat[0].price.silver * mat[1];
      totalGold += mat[0].price.gold * mat[1];
    });

    totalSilver += Math.floor(totalCopper / 100);
    totalCopper %= 100;
    totalGold += Math.floor(totalSilver / 100);
    totalSilver %= 100;

    return new Currency(totalGold, totalSilver, totalCopper);
  }
}

class Flask extends Craftable {}

class Elixir extends Craftable {}

class Potion extends Craftable {}

class Transmutation extends Craftable {}

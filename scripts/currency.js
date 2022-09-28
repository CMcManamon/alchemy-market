class Currency {
  constructor(gold, silver, copper) {
    this.gold = gold;
    this.silver = silver;
    this.copper = copper;
  }

  getString() {
    return this.gold + "." + this.silver + "." + this.copper;
  }

  add(value, count) {
    let totalGold = this.gold + value.gold * count;
    let totalSilver = this.silver + value.silver * count;
    let totalCopper = this.copper + value.copper * count;

    // flatten it out
    totalSilver += Math.floor(totalCopper / 100);
    totalCopper %= 100;
    totalGold += Math.floor(totalSilver / 100);
    totalSilver %= 100;

    return new Currency(totalGold, totalSilver, totalCopper);
  }
}

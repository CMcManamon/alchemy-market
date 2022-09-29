class Currency {
  constructor(gold, silver, copper) {
    this.gold = gold;
    this.silver = silver;
    this.copper = copper;

    this.#formatCurrency();
  }

  getString() {
    return this.gold + "." + this.silver + "." + this.copper;
  }

  // Returns a new Currency as the sum of this Currency and value * count
  add(value, count) {
    let totalGold = this.gold + value.gold * count;
    let totalSilver = this.silver + value.silver * count;
    let totalCopper = this.copper + value.copper * count;

    return new Currency(totalGold, totalSilver, totalCopper);
  }

  // Returns a new Currency as the remainder of subtracting value from this Currency
  difference(value) {
    let totalGold = this.gold - value.gold;
    let totalSilver = this.silver - value.silver;
    let totalCopper = this.copper - value.copper;
    return new Currency(totalGold, totalSilver, totalCopper);
  }

  #formatCurrency() {
    // handle negative coppers and silvers
    if (this.copper < 0) {
      let borrowedSilver = -1 * Math.floor(this.copper / 100);
      this.silver -= borrowedSilver;
      this.copper += borrowedSilver * 100;
    }

    if (this.silver < 0) {
      let borrowedGold = -1 * Math.floor(this.silver / 100);
      this.gold -= borrowedGold;
      this.silver += borrowedGold * 100;
    }
    // flatten it out
    this.silver += Math.floor(this.copper / 100);
    this.copper %= 100;
    this.gold += Math.floor(this.silver / 100);
    this.silver %= 100;
  }
}

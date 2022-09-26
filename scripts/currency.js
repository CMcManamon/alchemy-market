class Currency {
  constructor(gold, silver, copper) {
    this.gold = gold;
    this.silver = silver;
    this.copper = copper;
  }

  getString() {
    return this.gold + "." + this.silver + "." + this.copper;
  }
}

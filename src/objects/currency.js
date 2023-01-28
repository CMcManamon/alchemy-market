class Currency {
  constructor(value) {
    this.value = value;
  }

  // 1 silver = 100 copper
  // 1 gold = 100 silver
  // Only gold value is displayed with a negative sign
  getGold() {
    return Math.floor(Math.abs(this.value) / 10000);
  }

  getSilver() {
    return Math.floor(Math.abs(this.value) / 100) % 100;
  }

  getCopper() {
    return Math.abs(this.value) % 100;
  }

  getSign() {
    return this.value < 0 ? "-" : "";
  }

  getString() {
    return (
      this.getSign() +
      this.getGold() +
      "g " +
      this.getSilver() +
      "s " +
      this.getCopper() +
      "c"
    );
  }

  static subtract(a, b) {
    let diff = a.value - b.value;
    return new Currency(diff);
  }
}
export default Currency;

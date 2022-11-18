class Currency {
  constructor(value) {
    this.value = value;
  }

  getString() {
    // Break up total copper value into gold, silver and copper
    // 1 silver = 100 copper
    // 1 gold = 100 silver
    // Only gold value is displayed with a negative sign
    let copper = Math.abs(this.value % 100);
    let silver = Math.abs(Math.floor(this.value / 100) % 100);
    let gold = Math.floor(this.value / 10000);
    return gold + "." + silver + "." + copper;
  }

  static subtract(a, b) {
    let diff = a.value - b.value;
    return new Currency(diff);
  }
}
export default Currency;

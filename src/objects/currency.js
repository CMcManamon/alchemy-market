class Currency {
  constructor(value) {
    this.value = value;
  }

  getString() {
    let copper = this.value % 100;
    let silver = Math.floor(this.value / 100) % 100;
    let gold = Math.floor(this.value / 10000);
    return gold + "." + silver + "." + copper;
  }
}
export default Currency;

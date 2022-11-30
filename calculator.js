class Calculator {
  constructor(a, b) {
    this.value1 = a;
    this.value2 = b;
  }

  add() {
    return this.value1 + this.value2;
  }

  sub() {
    return this.value1 - this.value2;
  }

  mul() {
    return this.value1 * this.value2;
  }
}

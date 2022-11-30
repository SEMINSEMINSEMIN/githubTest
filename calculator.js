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

  div() {
    if (this.value2 === 0) {
      window.alert("나누는 수는 0이 되어서는 안 됩니다.");
      return;
    }
    return this.value1 / this.value2;
  }
}

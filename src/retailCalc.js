function Calculator() {
  this.orderValue = 1;
}

Calculator.prototype.calculateOrderValue = function(num1, num2) {
  return this.orderValue = num1 * num2;
};

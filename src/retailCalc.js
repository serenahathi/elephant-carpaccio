function Calculator(numberOfItems, pricePerItem) {
  this.orderValue = 1;
}

Calculator.prototype.calculateOrderValue = function(numberOfItems, pricePerItem) {
  return this.orderValue = numberOfItems * pricePerItem;
};

Calculator.prototype.applyDiscount = function(numberOfItems, pricePerItem) {
  if (this.orderValue >= 50000) {
    this.orderValue = parseInt(this.orderValue * 0.85);
  } else if (this.orderValue >= 10000) {
    this.orderValue = (this.orderValue * 0.90);
  } else if (this.orderValue >= 7000) {
    this.orderValue = this.orderValue * 0.93;
  } else if (this.orderValue >= 5000) {
    this.orderValue = this.orderValue * 0.95;
  } else if (this.orderValue >= 1000) {
    this.orderValue = this.orderValue * 0.97;
  } else {
    this.orderValue = this.orderValue
  }
  return this.orderValue.toFixed(2);
};
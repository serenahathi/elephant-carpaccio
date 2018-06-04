function Calculator(numberOfItems, pricePerItem) {
  this.orderValue = numberOfItems * pricePerItem;
}

Calculator.prototype.printOrderValue = function (numberOfItems, pricePerItem) {
  return this.orderValue
};

Calculator.prototype.applyDiscount = function (numberOfItems, pricePerItem) {
  if (this.orderValue >= 50000) {
    this.discounter(85)
  } else if (this.orderValue >= 10000) {
    this.discounter(90)
  } else if (this.orderValue >= 7000) {
    this.discounter(93)
  } else if (this.orderValue >= 5000) {
    this.discounter(95)
  } else if (this.orderValue >= 1000) {
    this.discounter(97)
  } else {
    this.orderValue
  }
  return this.orderValue;
};

Calculator.prototype.discounter = function(discount) {
  this.orderValue = (this.orderValue / 100) * discount;
}

Calculator.prototype.applyTaxes = function (state) {
  if (state === "UT") {
    this.orderValue += this.orderValue * 0.0685
  } else if (state === "NV") {
    this.orderValue += this.orderValue * 0.08;
  } else if (state === "TX") {
    this.orderValue += this.orderValue * 0.0625;
  } else if (state === "AL") {
    this.orderValue += this.orderValue * 0.04;
  } else if (state === "CA") {
    this.orderValue += this.orderValue * 0.0825;
  } else {
    this.orderValue;
  }
  return this.orderValue;
};

Calculator.prototype.totalOrderValue = function (numberOfItems, pricePerItem, state) {
  this.applyDiscount(numberOfItems, pricePerItem);
  this.applyTaxes(state);
  this.printOrderValue(numberOfItems, pricePerItem)
  return this.orderValue;
}
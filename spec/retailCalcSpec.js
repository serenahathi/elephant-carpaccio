describe('Calculator:', function() {

  describe("Base order value", function() {
    it("calculates the order value without discounts and taxes", function(){
      var calculator = new Calculator(3,3);
      expect(calculator.calculateOrderValue(3,3)).toEqual(9);
    });
  });

  describe("Applies a discount", function() {
    it("applies a 15% discount if the base order value is greater than or equal to 50k ", function() {
      var calculator = new Calculator(55000,1);
      calculator.calculateOrderValue(55000,1);
      expect(calculator.applyDiscount(56000,1)).toEqual(46750);
    });

    it("applies a 10% discount if the base order value is greater than or equal to 10k ", function() {
      var calculator = new Calculator(11000,1);
      calculator.calculateOrderValue(11000,1);
      expect(calculator.applyDiscount(11000,1)).toEqual(9900);
    });

    it("applies a 7% discount if the base order value is greater than or equal to 7k ", function() {
      var calculator = new Calculator(8000,1);
      calculator.calculateOrderValue(8000,1);
      expect(calculator.applyDiscount(8000,1)).toEqual(7440);
    });

    it("applies a 5% discount if the base order value is greater than or equal to 5k ", function() {
      var calculator = new Calculator(6000,1);
      calculator.calculateOrderValue(6000,1);
      expect(calculator.applyDiscount(6000,1)).toEqual(5700);
    });

    it("applies a 3% discount if the base order value is greater than or equal to 1k ", function() {
      var calculator = new Calculator(1100,1);
      calculator.calculateOrderValue(1100,1);
      expect(calculator.applyDiscount(1100,1)).toEqual(1067);
    });

    it("does not apply a discount if the base order value is less than 1k", function() {
      var calculator = new Calculator(50,2);
      calculator.calculateOrderValue(50,2)
      expect(calculator.applyDiscount(50,2)).toEqual(100);
    })
  })
});


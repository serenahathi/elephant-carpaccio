describe('Calculator:', function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("Base order value", function() {
    it("calculates the order value without discounts and taxes", function(){
      expect(calculator.calculateOrderValue(3,3)).toEqual(9);
    });
  });
});
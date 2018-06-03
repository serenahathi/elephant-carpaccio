describe('Calculator:', function () {

  describe("Base order value", function () {
    it("calculates the order value without discounts and taxes", function () {
      var calculator = new Calculator(3, 3, "UT");
      expect(calculator.printOrderValue(3, 3)).toEqual(9);
    });
  });

  describe("Applies a discount", function () {
    it("applies a 15% discount if the base order value is greater than or equal to 50k ", function () {
      var calculator = new Calculator(55000, 1, "UT");
      expect(calculator.applyDiscount(56000, 1)).toEqual(46750);
    });

    it("applies a 10% discount if the base order value is greater than or equal to 10k ", function () {
      var calculator = new Calculator(11000, 1, "UT");
      expect(calculator.applyDiscount(11000, 1)).toEqual(9900);
    });

    it("applies a 7% discount if the base order value is greater than or equal to 7k ", function () {
      var calculator = new Calculator(8000, 1, "UT");
      expect(calculator.applyDiscount(8000, 1)).toEqual(7440);
    });

    it("applies a 5% discount if the base order value is greater than or equal to 5k ", function () {
      var calculator = new Calculator(6000, 1, "UT");
      expect(calculator.applyDiscount(6000, 1)).toEqual(5700);
    });

    it("applies a 3% discount if the base order value is greater than or equal to 1k ", function () {
      var calculator = new Calculator(1100, 1, "UT");
      expect(calculator.applyDiscount(1100, 1)).toEqual(1067);
    });

    it("does not apply a discount if the base order value is less than 1k", function () {
      var calculator = new Calculator(50, 2, "UT");
      expect(calculator.applyDiscount(50, 2)).toEqual(100);
    })
  })

  describe("Applies taxes", function () {

    it("applies a 6.85% tax if UT is entered as a state ", function () {
      var calculator = new Calculator(100, 1, "UT");
      expect(calculator.applyTaxes("UT")).toEqual(106.85);
    });

    it("applies a 8% tax if NV is entered as a state ", function () {
      var calculator = new Calculator(100, 1, "NV");
      expect(calculator.applyTaxes("NV")).toEqual(108);
    });

    it("applies a 6.25% tax if TX is entered as a state ", function () {
      var calculator = new Calculator(100, 1, "TX");
      expect(calculator.applyTaxes("TX")).toEqual(106.25);
    });

    it("applies a 4% tax if AL is entered as a state ", function () {
      var calculator = new Calculator(100, 1, "AL");
      expect(calculator.applyTaxes("AL")).toEqual(104);
    });

    it("applies a 8.25% tax if CA is entered as a state ", function () {
      var calculator = new Calculator(100, 1, "CA");
      expect(calculator.applyTaxes("CA")).toEqual(108.25);
    });
  });

  describe("Final calculation", function() {
    it("calculates the total order value after discounts and tax for an average sum", function(){
      var calculator = new Calculator(5,1000,"NV");
      expect(calculator.totalOrderValue(5,1000,"NV")).toEqual(5130);
    });

    it("calculates the total order value after discounts and tax for a large sum", function(){
      var calculator = new Calculator(160,1000,"AL");
      expect(calculator.totalOrderValue(160,1000,"AL")).toEqual(141440);
    });

    it("calculates the total order value after discounts and tax for a small sum", function(){
      var calculator = new Calculator(1,10,"CA");
      expect(calculator.totalOrderValue(1,10,"CA")).toEqual(10.825);
    });
  });

});
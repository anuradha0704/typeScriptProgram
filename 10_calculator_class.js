var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    Calculator.prototype.mul = function (x, y) {
        return x * y;
    };
    Calculator.prototype.div = function (x, y) {
        return x * y;
    };
    return Calculator;
}());
var objeCalculator = new Calculator();
var addition = objeCalculator.add(2, 3);
console.log("Addition Of Given number:- ".concat(addition));
var substraction = objeCalculator.sub(25, 3);
console.log("Substraction Of Given number:- ".concat(substraction));
var multiplication = objeCalculator.mul(25, 3);
console.log("multiplication Of Given number:- ".concat(multiplication));
var division = objeCalculator.div(25, 3);
console.log("division Of Given number:- ".concat(division));

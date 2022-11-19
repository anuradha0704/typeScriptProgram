var Calculators = /** @class */ (function () {
    function Calculators() {
    }
    Calculators.calculateFun = function (num1, num2) {
        var addition = num1 + num2;
        console.log("Addition of given Number ".concat(num1, " + ").concat(num2, " is:-"), addition);
        var sub = num1 - num2;
        console.log("Substraction of given Number ".concat(num1, " - ").concat(num2, " is:-"), sub);
        var multiplication = num1 * num2;
        console.log("multiplication of given Number ".concat(num1, " * ").concat(num2, " is:-"), multiplication);
        var div = num1 / num2;
        console.log("Division of given Number ".concat(num1, " / ").concat(num2, " is:-"), div);
    };
    return Calculators;
}());
;
Calculators.calculateFun(20, 10);

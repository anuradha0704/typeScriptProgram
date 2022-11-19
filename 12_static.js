var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankname = "bob";
        console.log(Check.bankname);
    };
    Check.bankname = "bank of india";
    return Check;
}());
var objcCheck = new Check();
var banknam = Check.bankname;
//console.log(banknam);

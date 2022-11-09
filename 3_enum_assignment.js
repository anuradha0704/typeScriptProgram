var units;
(function (units) {
    units[units["cm"] = 0] = "cm";
    units[units["meter"] = 1] = "meter";
    units[units["liter"] = 2] = "liter";
    units[units["minutes"] = 3] = "minutes";
    units[units["gram"] = 4] = "gram";
    units[units["kilogram"] = 5] = "kilogram";
    units[units["dozen"] = 6] = "dozen";
})(units || (units = {}));
// enum display o/p in the form of 1 or 0
console.log(units.cm); // prints o/p 1
//console.log(Gender.Male);// o/p 0

var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    return Flight;
}());
var objFlight = new Flight(123, "Mumbai", "UK");
function display() {
    console.log(this.flightNo + " " + this.from + " " + this.to);
}
display();

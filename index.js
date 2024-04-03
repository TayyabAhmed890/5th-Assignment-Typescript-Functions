//Simple Function..!
function greet(Name, ID) {
    console.log("Hello! ".concat(Name, " Welcome to Our Enterprises your ID is ").concat(ID));
}
;
greet("Tayyab Ahmed", 108091);
greet("Ali Ahmed", 108093);
greet("Hammad", 108057);
function Offer(Discount, Complimentery, Buy1Get1) {
    if (Discount === void 0) { Discount = 70; }
    if (Complimentery === void 0) { Complimentery = 1; }
    if (Buy1Get1 === void 0) { Buy1Get1 = 1; }
    var myOffer = 1000 - Discount + Complimentery + Buy1Get1;
    console.log("Your Offer is: ".concat(myOffer));
    return myOffer;
}
console.log(Offer(100, 2, 4));
console.log(Offer(50, 2, 5));
//Fat Arrow Function..!
var checkin = function (Name, Time, Id) {
    console.log("".concat(Name, " your Checkin Timing is ").concat(Time, " id is ").concat(Id));
};
checkin("Tayyab Ahmed", "9:10 AM", 108091);

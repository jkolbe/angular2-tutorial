var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var age = 20;
function printPerson(name, age) {
    console.log("Name: " + name + " age: " + age);
}
var Product = (function () {
    function Product(id) {
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID: " + this.id);
        console.log("Price: " + this.price);
    };
    return Product;
}());
var Tour = (function (_super) {
    __extends(Tour, _super);
    function Tour(id, duration) {
        _super.call(this, id);
        this.duration = duration;
    }
    Tour.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour;
}(Product));
var Dining = (function (_super) {
    __extends(Dining, _super);
    function Dining() {
        _super.apply(this, arguments);
    }
    return Dining;
}(Product));
function cancelBooking(c) {
    console.log("Canceling %s (%d)", c.title, c.id);
    console.log("Price %d", c.price);
    console.log("Canceling booking. Charge: %d", c.cancelationFee);
    console.log("Total refund: %d", c.price - c.cancelationFee);
}
function test(p) {
    p.printDetails();
}
var p = new Product(1);
p.title = "title?";
p.price = 3.99;
var t = new Tour(2, "8 hours");
t.title = "tour title?";
t.price = 90.99;
t.cancelationFee = 100.00;
var d = new Dining(3);
function configSomething(op) {
    console.log("Directory %s", op.directory);
    console.log("File %s", op.file);
    if (op.maxSize) {
        console.log("Size %d", op.maxSize);
    }
    console.log();
}
configSomething({
    directory: '/foo',
    file: 'bar.txt',
    maxSize: 1024
});
configSomething({
    directory: "/dir1",
    file: "persons.json"
});
var adder1 = function (a, b) { return a + b; };
var adder2 = function (a, b) { return a + b; };
var info = { name: 'stuff', data: { id: 1, text: 'abc' } };
var data = function (result) { return result.data; };
var noparams = function () { return "Hello World"; };
var multiline = function (a, b) {
    a += b;
    a += b;
    return a;
};
console.log(adder1(3, 5));
console.log(adder2(3, 5));
console.log(data(info));
console.log(noparams());
console.log(multiline(2, 3));
// GENERICS
/*
toolbox for creating reusable components is generics,
that is, being able to create a component that can work
over a variety of types rather than a single one.
This allows users to consume these components and
use their own types.
*/
// without Genereics
function identity2(arg) {
    return arg;
}
console.log(identity2('hello'));
console.log();
// with Generics
function identity(arg) {
    return arg;
}
console.log(identity('hello'));
console.log(identity('hello2'));
console.log();
//# sourceMappingURL=play.js.map
var age: number = 20;

function printPerson(name:string, age:number) {
  console.log(`Name: ${name} age: ${age}`);
}
//printPerson("Billy", 8);


interface Bookable {
  availableDates: [Date]
}

interface Cancelable {
  cancelationFee: number
}

class Product {
  title: string;
  price: number;
  id: number;

  constructor(id:number){
    this.id = id;
  }

  printDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`ID: ${this.id}`);
    console.log(`Price: ${this.price}`);
  }

}

class Tour extends Product implements Bookable, Cancelable {
  duration: string;
  availableDates: [Date];
  cancelationFee: number;

  constructor(id:number, duration:string){
    super(id);
    this.duration = duration;
  }

  printDetails() {
    super.printDetails();
    console.log(`Duration: ${this.duration}`);
  }
}

class Dining extends Product {
  cuisine: string;
  childPrice: number;
}


function cancelBooking<T extends Cancelable & Product>(c:T) {
  console.log("Canceling %s (%d)", c.title, c.id);
  console.log("Price %d", c.price);
  console.log("Canceling booking. Charge: %d", c.cancelationFee);
  console.log("Total refund: %d", c.price - c.cancelationFee);
}

function test(p:Product) {
  p.printDetails();
}



var p = new Product(1);
p.title = "title?"; p.price = 3.99;

var t = new Tour(2, "8 hours");
t.title = "tour title?"; t.price = 90.99; t.cancelationFee = 100.00;


var d = new Dining(3);

// cancelBooking(t);
// test(p); test(t); test(d);

interface ConfigOption {
  directory: string;
  file: string
  maxSize?: number; // optional variable
}

function configSomething(op: ConfigOption){
  console.log("Directory %s", op.directory);
  console.log("File %s", op.file);
  if(op.maxSize){
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
})


var adder1 = function(a,b) { return a + b; }
var adder2 = (a,b) => a + b;

var info = {name:'stuff', data: {id:1, text: 'abc'}}
var data = (result) => result.data;

var noparams = () => "Hello World";
var multiline = (a,b) => {
  a += b;
  a += b;
  return a;
}

console.log(adder1(3,5));
console.log(adder2(3,5));
console.log(data(info));
console.log(noparams());
console.log(multiline(2,3));

// GENERICS

/*
toolbox for creating reusable components is generics, 
that is, being able to create a component that can work 
over a variety of types rather than a single one. 
This allows users to consume these components and 
use their own types.
*/

// without Genereics
function identity2(arg: any): any {
    return arg;
}
console.log(identity2('hello'));
console.log();

// with Generics
function identity<T>(arg: T):T {
  return arg;
}
console.log(identity('hello'));
console.log(identity<string>('hello2'));
console.log();



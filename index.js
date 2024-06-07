
                           // this is inherit product cls to electronic cls

// procduct class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`${this.name}: ₹${this.price}`);
    }
}

// Subclass for electronic products
class Electronic extends Product {
    constructor(name, price, warranty) {
        super(name, price);//calling product class properties
        this.warranty = warranty; // warranty in years
    }

    display() {
        super.display();//calling product cls display() method
        console.log(`Warranty: ${this.warranty} years`);
    }
}


// Create some electronic products
let laptop = new Electronic('Laptop', 35000, 2);
let smartphone = new Electronic('Smartphone', 15000, 1);

// Display the products
laptop.display();
smartphone.display();

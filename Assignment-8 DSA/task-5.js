class Customer {
  constructor(name) {
    this.name = name;
    this.order = [];
  }

  addToOrder(item) {
    this.order.push(item);
  }
}

class Cashier {
  constructor() {
    this.queue = [];
    this.current_customer = null;
  }

  addCustomer(customer) {
    this.queue.push(customer);
    if (!this.current_customer) {
      this.serveNextCustomer();
    }
  }

  serveNextCustomer() {
    if (this.queue.length > 0) {
      this.current_customer = this.queue.shift();
      console.log(`Serving ${this.current_customer.name}`);
      this.processOrder();
    } else {
      console.log("No customers in queue.");
    }
  }

  processOrder() {
    for (const item of this.current_customer.order) {
      console.log(`Preparing ${item} for ${this.current_customer.name}`);
    }
    console.log(`Order complete for ${this.current_customer.name}`);
    this.current_customer = null;
    this.serveNextCustomer();
  }
}

const cashier = new Cashier();

const customer1 = new Customer("shree");
const customer2 = new Customer("radhe");

customer1.addToOrder("brush");
customer2.addToOrder("colgate");

cashier.addCustomer(customer1);
cashier.addCustomer(customer2);

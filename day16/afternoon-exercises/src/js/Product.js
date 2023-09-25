class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  sell() {
    if (this.quantity > 0) {
      this.quantity -= 1;
    }
  }

  store(count) {
    this.quantity += count;
  }
}

export { Product };

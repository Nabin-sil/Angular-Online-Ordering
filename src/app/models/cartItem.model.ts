import { Products } from './product.model';

export class CartItem {
  constructor(product: Products) {
    this.product = product;
  }
  product: Products;
  quantity: number = 1;

  get price(): number {
    return this.product.price * this.quantity;
  }
}

// export class CartItem {
//   constructor(public product: Products) {}
//   quantity: number = 1;
//   price: number = this.product.price;
// }

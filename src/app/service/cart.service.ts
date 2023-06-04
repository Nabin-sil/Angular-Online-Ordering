import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cartItem.model';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  private cart: Cart = new Cart();
  public search = new BehaviorSubject<string>('');

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: Products): void {
    let cartItem = this.cart.items.find(
      (item) => item.product.id === product.id
    );
    if (cartItem) {
      this.changeQuantity(product.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
  }

  removeFromCart(productId?: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.product.id != productId
    );
  }

  changeQuantity(productId?: number, quantity?: number) {
    let cartItem = this.cart.items.find(
      (item) => item.product.id === productId
    );
    if (!cartItem) return;
    //      cartItem.quantity = quantity;
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  addtoCartById(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;

    this.cartItemList.map((a: any) => {
      grandTotal += a.quantity * a.price;
    });
    return grandTotal;
  }

  getCart(): Cart {
    return this.cart;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}

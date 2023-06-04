import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Products } from '../models/product.model';
import { map, Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('https://fakestoreapi.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProductById(id: Number): Observable<Products> {
    return this.http.get<Products>('https://fakestoreapi.com/products/' + id);
  }

  // getProductById(id: string) {
  //   return this.http.get<Products>(`https://fakestoreapi.com/products/${id}`);
  // }

  getProductsById(productId: string): Observable<Products> {
    return this.http.get<Products>(
      'https://fakestoreapi.com/products/' + productId
    );
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.http.get<Products[]>(
      'https://fakestoreapi.com/products/' + searchTerm
    );
  }

  getAllTags(): Tag[] {
    return [
      { category: 'All', count: 14 },
      { category: 'Mens wearing', count: 4 },
      { category: 'Women Wearing', count: 2 },
      { category: 'Jwellery', count: 3 },
      { category: 'necklake', count: 2 },
      { category: 'watch', count: 1 },
      { category: 'Tv', count: 1 },
      { category: 'Machines', count: 1 },
    ];
  }

  // getAllProductsByTag(tag: string): Products[] {
  //   return tag == 'All'
  //     ? this.getAll()
  //     : this.getAll().filter((food) => food.tags?.includes(tag));
  // }

  // getAllTags(): Observable<Tag[]> {
  //   return this.http.get<Tag[]>('https://fakestoreapi.com/products/');
  // }

  getAllFoodsByTag(tag: string): Observable<Products[]> {
    return tag === 'All'
      ? this.getProduct()
      : this.http.get<Products[]>('https://fakestoreapi.com/products/' + tag);
  }

  getProducts() {
    return this.products;
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.products));
  }

  addToCart(addedProduct: any) {
    this.products.push(addedProduct);
    this.saveCart();
  }

  loadCart(): void {
    this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  productInCart(product: any): boolean {
    return this.products.findIndex((x: any) => x.id === product.id) > -1;
  }

  removeProduct(product: any) {
    const index = this.products.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
    }
  }

  clearProducts() {
    localStorage.clear();
  }
}

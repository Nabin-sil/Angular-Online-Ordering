import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/product.model';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: Products;
  public totalItem: number = 0;
  val3: number = 5;
  products: any[] = [];
  subTotal!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        productService
          .getProductsById(params['id'])
          .subscribe((serverProduct) => {
            this.product = serverProduct;
            Object.assign(this.product, {
              quantity: 1,
              total: this.product.price,
            });
          });
    });
  }

  ngOnInit(): void {}

  // addToCart() {
  // }

  // addtocart(item: any) {
  //   this.cartService.addtoCart(this.product);
  //   this.router.navigateByUrl('/cart-page');
  // }

  // addtocart(item: any) {
  //   this.cartService.addToCart(this.product);
  //   this.router.navigateByUrl('/cart');
  // }

  //Add product to Cart
  addToCart(product: any) {
    if (!this.productService.productInCart(product)) {
      product.quantity = 1;
      this.productService.addToCart(product);
      this.products = [...this.productService.getProducts()];
      this.subTotal = product.price;
      this.router.navigateByUrl('/cart');
    }
  }

  get total() {
    return this.products?.reduce(
      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price;
  }

  addtocart(product: any) {
    // this.products.push(product.totalItem);
    this.cartService.addtoCart(product);
    this.router.navigateByUrl('/cart');
  }
}

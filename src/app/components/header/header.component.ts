import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  value3!: string;
  public searchTerm!: string;
  public totalItem: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'product',
      },

      {
        label: 'Cart',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: 'cart',
      },

      {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: 'login',
      },
    ];

    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}

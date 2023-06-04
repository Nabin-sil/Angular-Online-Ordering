import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { LoginComponent } from './components/login/login.component';
import { CheckComponent } from './components/check/check.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },

  { path: 'product', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: StripePaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check', component: CheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

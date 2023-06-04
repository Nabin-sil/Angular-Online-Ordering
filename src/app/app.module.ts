import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { TagsComponent } from './components/tags/tags.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './components/directives/highlight.directive'; // ->  imported directive
import { FilterPipe } from './components/directives/filter.pipe';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component'; // -> imported filter pipe
import { RatingModule } from 'primeng/rating';
import { StripePaymentComponent } from './components/stripe-payment/stripe-payment.component';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ChipModule } from 'primeng/chip';

import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { LoginComponent } from './components/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { DataViewModule } from 'primeng/dataview';
import { CheckComponent } from './components/check/check.component';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailComponent,
    TagsComponent,
    SearchComponent,
    FilterPipe,
    HighlightDirective,
    CartComponent,
    FooterComponent,
    StripePaymentComponent,
    LoginComponent,
    CheckComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    SkeletonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    TabViewModule,
    TabMenuModule,
    ScrollTopModule,
    ChipModule,
    CheckboxModule,
    InputNumberModule,
    DataViewModule,
    TableModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

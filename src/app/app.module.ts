import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';

import {ProductService} from './product.service';
import {CategoryService} from './category.service';

import { NotFoundComponent } from './not-found/not-found.component';
import { LimitTextPipe } from './limit-text.pipe';
import {routing} from './app.router';
import {CartModule} from "./cart/cart.module";


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent,
    NotFoundComponent,
    LimitTextPipe
  ],
  imports: [
    BrowserModule,
    CartModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

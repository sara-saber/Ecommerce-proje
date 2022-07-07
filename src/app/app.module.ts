import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Modules/products/products.component';
import { CardsComponent } from './Modules/cards/cards.component';
import { NewsComponent } from './Modules/news/news.component';
import { MenuComponent } from './Modules/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CardsComponent,
    NewsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

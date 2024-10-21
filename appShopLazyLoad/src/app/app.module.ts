import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from './shared/product/shared.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SharedModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}

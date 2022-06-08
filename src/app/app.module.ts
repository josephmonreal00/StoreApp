import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { Products } from './Components/Products/products.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, NavBarComponent, Products],
  bootstrap: [AppComponent],
})
export class AppModule {}

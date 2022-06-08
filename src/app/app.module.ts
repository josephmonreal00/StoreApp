import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { Products } from './Components/Products/products.component';
import { Footer } from './Components/Footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavBarComponent,
    Products,
    Footer,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

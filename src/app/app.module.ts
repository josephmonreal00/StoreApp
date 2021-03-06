import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Drinks } from './Components/Drinks/drinks.component';
import { Products } from './Components/Products/products.component';
import { Footer } from './Components/Footer/footer.component';
import { DogsComponent } from './Components/Dogs/dogs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Products,
    Footer,
    Drinks,
    DogsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

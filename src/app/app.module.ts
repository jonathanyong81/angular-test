import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { PuppiesComponent } from './puppies.component';
import { SearchComponent } from './search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductsComponent,
    AdminComponent,
    PuppiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

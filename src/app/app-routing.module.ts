import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products.component';
import { PuppiesComponent } from './puppies.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'puppies', component: PuppiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

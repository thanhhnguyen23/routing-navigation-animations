import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products.component';

const productRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailsComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
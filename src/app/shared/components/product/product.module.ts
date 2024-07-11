import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports : [
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent,
  ]
})
export class ProductModule { }

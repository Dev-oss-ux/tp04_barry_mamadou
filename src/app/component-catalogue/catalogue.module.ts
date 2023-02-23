import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsCatalogueComponent } from './details-catalogue/details-catalogue.component';

const catalogueRoutes: Routes = [
  { path: '', component: ProductCatalogueComponent},
  { path: ':id', component: DetailsCatalogueComponent}

]


@NgModule({
  declarations: [
    ProductCatalogueComponent,
    DetailsCatalogueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(catalogueRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DetailsCatalogueComponent]

})
export class CatalogueModule { }

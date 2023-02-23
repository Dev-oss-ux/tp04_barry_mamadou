import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';

const storeRoutes: Routes = [
  { path: '', component: StoreComponent},

]


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(storeRoutes),

  ]
})
export class StoreModule { }

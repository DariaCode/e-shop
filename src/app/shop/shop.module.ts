import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// My modules: 
import { SharedModule } from '../shared/shared.module';
// My components:
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsFilterComponent } from './items-filter/items-filter.component';

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemsFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'items', component: ItemsListComponent}
    ])
  ]
})
export class ShopModule { }
